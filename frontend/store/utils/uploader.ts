export const getFileFromUrl = async (url: string) : Promise<File> => {
    const fileName = url.substring(url.lastIndexOf('/')+1);
    const response = await fetch(url);
    const content = await response.body.getReader().read();

    return new File([content.value.buffer], fileName);
}
