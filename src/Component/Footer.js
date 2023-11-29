// Blog Footer 화면

import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <a>Copyright ⓒ 2022 Seotjuu All rights reserved.</a>&emsp;
        <a href="https://github.com/Seotjuu" color="black"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
      </div>
    </>
  );
}

// .footer {
//   margin-top: 10%;
//   padding-top: 10px;
//   border-top: solid 1px #E9ECEF;
//   display: flex;
//   justify-content: center;
//   align-items: center;