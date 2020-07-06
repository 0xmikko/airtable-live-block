import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BlockRendererProps } from "./BlockFactory";
import { LandingsBlocks } from "../../core/block";
import { BlockInfo } from "../BlockInfo";
import { getFileFromUrl } from "../../store/utils/uploader";
import actions from "../../store/actions";
import { FieldType } from "@airtable/blocks/models";

export const PublishBlockRenderer: React.FC<BlockRendererProps> = ({
  block,
  records,
  matcher,
  index,
  bundleName,
  startUpload,
}) => {
  const extractor = LandingsBlocks[block.type].extractor;
  if (extractor === undefined) {
    return (
      <BlockInfo type={block.type}>
        <div style={{ color: "red" }}>No extractor found</div>
      </BlockInfo>
    );
  }
  const dispatch = useDispatch();

  const [progress, setProgress] = useState("Ready for upload");

  const upload = async () => {
    setProgress("Uploading...");
    const data = extractor(records, matcher);
    const schema = LandingsBlocks[block.type].schema;
    const fileFields = Object.entries(schema)
      .filter((s) => s[1].type === FieldType.MULTIPLE_ATTACHMENTS)
      .map((s) => s[0]);

    console.log(fileFields);

    for (let field of fileFields) {
      for (let i = 0; i < data.length; i++) {
        if (data[i][field] === undefined || data[i][field] === "") continue;
        const file = await getFileFromUrl(data[i][field]);
        const result = await dispatch(
          actions.bundles.uploadPicture(bundleName, file)
        );
        // @ts-ignore
        const publicUrl = result.payload.url;
        data[i][field] = publicUrl;
      }
    }

    const result = await dispatch(
      actions.bundles.createUpdateDetails(bundleName, {
        id: bundleName,
        index,
        block: JSON.stringify({ block: block, data }),
      })
    );

    setProgress("Uploaded");
    console.log(JSON.stringify(data));
  };

  useEffect(() => {
    if (startUpload) {
      upload().then((e) => console.log("deo"));
    }
  }, [startUpload]);

  return (
    <BlockInfo type={block.type}>
      <div style={{ color: progress === "Uploaded" ? "green" : "" }}>
        {progress}
      </div>
    </BlockInfo>
  );
};
