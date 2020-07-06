import React, { useEffect } from "react";

interface ScrollSpyProps {
  scrollTargetIds: string[];
  activeNavClass: string;
  scrollDuration: number;
  headerBackground: boolean;
  router?: string;
  className?: string;
}

export const ScrollspyNav: React.FC<ScrollSpyProps> = ({
  scrollTargetIds,
  headerBackground,
  activeNavClass,
  scrollDuration,
  router,
  className,
  children,
}) => {
  const homeDefaultLink = router && router === "HashRouter" ? "#/" : "/";
  const hashIdentifier = router && router === "HashRouter" ? "#/#" : "#";

  const easeInOutQuad = (
    current_time: number,
    start: number,
    change: number,
    duration: number
  ): number => {
    current_time /= duration / 2;
    if (current_time < 1)
      return (change / 2) * current_time * current_time + start;
    current_time--;
    return (-change / 2) * (current_time * (current_time - 2) - 1) + start;
  };

  const scrollTo = (start: number, to: number, duration: number): number => {
    let change = to - start,
      currentTime = 0,
      increment = 10;

    let animateScroll = () => {
      currentTime += increment;
      let val = easeInOutQuad(currentTime, start, change, duration);
      window.scrollTo(0, val);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  const getNavLinkElement = (sectionID: string): Element => {
    return document.querySelector(`a[href='${hashIdentifier}${sectionID}']`);
  };

  const getNavToSectionID = (navHref: string): string => {
    return navHref.includes(hashIdentifier)
      ? navHref.replace(hashIdentifier, "")
      : "";
  };

  useEffect(() => {
    if (document.querySelector(`a[href='${homeDefaultLink}']`)) {
      document
        .querySelector(`a[href='${homeDefaultLink}']`)
        .addEventListener("click", (event) => {
          event.preventDefault();
          scrollTo(window.pageYOffset, 0, scrollDuration);
          window.location.hash = "";
        });
    }

    document
      .querySelector("div[data-nav='list']")
      .querySelectorAll("a")
      .forEach((navLink) => {
        navLink.addEventListener("click", (event) => {
          event.preventDefault();
          let sectionID = getNavToSectionID(navLink.getAttribute("href"));

          if (sectionID) {
            let scrollTargetPosition =
              document.getElementById(sectionID).offsetTop -
              (headerBackground
                ? document.querySelector("div[data-nav='list']").scrollHeight
                : 0);
            scrollTo(window.pageYOffset, scrollTargetPosition, scrollDuration);
          } else {
            scrollTo(window.pageYOffset, 0, scrollDuration);
          }
        });
      });

    window.addEventListener("scroll", scrollSection, true);
    return () => {
      window.removeEventListener("scroll", scrollSection, true);
    };
  }, []);

  const scrollSection = () => {
    let scrollSectionOffsetTop;
    scrollTargetIds.forEach((sectionID, index) => {
      scrollSectionOffsetTop =
        document.getElementById(sectionID).offsetTop -
        (headerBackground
          ? document.querySelector("div[data-nav='list']").scrollHeight
          : 0);

      if (
        window.pageYOffset >= scrollSectionOffsetTop &&
        window.pageYOffset <
          scrollSectionOffsetTop +
            document.getElementById(sectionID).scrollHeight
      ) {
        getNavLinkElement(sectionID).classList.add(activeNavClass);
        getNavLinkElement(sectionID).parentNode.classList.add(activeNavClass);
        clearOtherNavLinkActiveStyle(sectionID);
      } else {
        getNavLinkElement(sectionID).classList.remove(activeNavClass);
        getNavLinkElement(sectionID).parentNode.classList.remove(
          activeNavClass
        );
      }

      if (
        window.innerHeight + window.pageYOffset >= document.body.scrollHeight &&
        index === scrollTargetIds.length - 1
      ) {
        getNavLinkElement(sectionID).classList.add(activeNavClass);
        getNavLinkElement(sectionID).parentNode.classList.add(activeNavClass);
        clearOtherNavLinkActiveStyle(sectionID);
      }
    });
  };
  const clearOtherNavLinkActiveStyle = (excludeSectionID: string) => {
    scrollTargetIds.forEach((sectionID, index) => {
      if (sectionID !== excludeSectionID) {
        getNavLinkElement(sectionID).classList.remove(activeNavClass);
        getNavLinkElement(sectionID).parentNode.classList.remove(
          activeNavClass
        );
      }
    });
  };

  return (
    <div data-nav="list" className={className}>
      {children}
    </div>
  );
};
