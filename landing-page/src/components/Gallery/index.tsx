import { FC, useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import Project from "./components/Project";
import useMeasure from "react-use-measure";
import "./styles.css";

const GalleryWorks: FC = () => {
  const [ref, { width }] = useMeasure();

  const FAST_DURATION = 35;
  const SLOW_DURATION = 90;
  const [durationLeft, setDurationLeft] = useState(FAST_DURATION); // Separate duration for left scroll
  const [durationRight, setDurationRight] = useState(FAST_DURATION); // Separate duration for right scroll

  const xTranslationLeft = useMotionValue(0); // scroll to left
  const xTranslationRight = useMotionValue(0); // scroll to right

  const [mustFinishLeft, setMustFinishLeft] = useState(false);
  const [mustFinishRight, setMustFinishRight] = useState(false);

  const [rerenderLeft, setRerenderLeft] = useState(false);
  const [rerenderRight, setRerenderRight] = useState(false);

  // Scroll to left carousel
  useEffect(() => {
    let controlsLeft;
    const finalPositionLeft = -width / 2 - 20;

    if (mustFinishLeft) {
      controlsLeft = animate(
        xTranslationLeft,
        [xTranslationLeft.get(), finalPositionLeft],
        {
          ease: "linear",
          duration:
            durationLeft * (1 - xTranslationLeft.get() / finalPositionLeft),
          onComplete: () => {
            setMustFinishLeft(false);
            setRerenderLeft(!rerenderLeft);
          },
        }
      );
    } else {
      controlsLeft = animate(xTranslationLeft, [0, finalPositionLeft], {
        ease: "linear",
        duration: durationLeft,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controlsLeft.stop;
  }, [xTranslationLeft, width, durationLeft, rerenderLeft, mustFinishLeft]);

  // Scroll to right carousel
  useEffect(() => {
    let controlsRight;
    const finalPositionRight = width / 2 + 20;

    if (mustFinishRight) {
      controlsRight = animate(
        xTranslationRight,
        [xTranslationRight.get(), finalPositionRight],
        {
          ease: "linear",
          duration:
            durationRight * (1 - xTranslationRight.get() / finalPositionRight),
          onComplete: () => {
            setMustFinishRight(false);
            setRerenderRight(!rerenderRight);
          },
        }
      );
    } else {
      controlsRight = animate(xTranslationRight, [0, finalPositionRight], {
        ease: "linear",
        duration: durationRight,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controlsRight.stop;
  }, [xTranslationRight, width, durationRight, rerenderRight, mustFinishRight]);

  return (
    <section className="flex flex-col w-full h-full gap-40px mb-160px">
      <div className="flex flex-col items-start justify-center h-full gap-40px w-full flex-nowrap">
        <motion.div
          className="flex items-center justify-center gap-40px h-[306px]"
          ref={ref}
          style={{ x: xTranslationLeft }}
          onHoverStart={() => {
            setMustFinishLeft(true);
            setDurationLeft(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinishLeft(true);
            setDurationLeft(FAST_DURATION);
          }}
        >
          <Project />
        </motion.div>
      </div>
      <div className="flex flex-col items-end justify-center h-full gap-40px w-full flex-nowrap">
        <motion.div
          className="flex items-center justify-center gap-40px h-[306px]"
          ref={ref}
          style={{ x: xTranslationRight }}
          onHoverStart={() => {
            setMustFinishRight(true);
            setDurationRight(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinishRight(true);
            setDurationRight(FAST_DURATION);
          }}
        >
          <Project />
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryWorks;
