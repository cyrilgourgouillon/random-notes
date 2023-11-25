import {
  FaCarSide,
  FaPlane,
  FaRocket,
  FaRunning,
  FaWalking,
} from "react-icons/fa";
import { Speed } from "../config";

export const getSpeedIcon = (speed: Speed) => {
  switch (speed) {
    case Speed.walk:
      return <FaWalking />;
    case Speed.run:
      return <FaRunning />;
    case Speed.drive:
      return <FaCarSide />;
    case Speed.fly:
      return <FaPlane />;
    case Speed.rush:
      return <FaRocket />;
  }
};

export const getSpeedColor = (speed: Speed) => {
  switch (speed) {
    case Speed.walk:
      return 'yellow';
    case Speed.run:
      return 'orange';
    case Speed.drive:
      return 'red';
    case Speed.fly:
      return 'pink';
    case Speed.rush:
      return 'purple';
  }
};
