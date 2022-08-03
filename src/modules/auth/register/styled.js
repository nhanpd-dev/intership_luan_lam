import styled from "styled-components";
import COLORS from "../../../themes/colors";

const Container = styled.div`
  position: fixed;
  top: 10%;
  left: 20%;
  font-family: sans-serif;
  margin: 0 auto;
  padding-bottom: 20px;
  overflow: hidden;
  border-radius: 25px;
  // background-color: ${COLORS.secondary};
  background-color: #ffffff;
  boder: 1px solid #888888;
  box-shadow: 5px 10px #888888;
  z-index: 1;
  width: 800px;

  .title {
    text-align: center;
    font-weight: bold;
    // font-size: 24px;
  }

  .errors-message {
    margin-left: 152px;
    color: #ff0000;
    font-size: 16px;
    font-weight: 600;
  }

  .submit-button {
    outline: none;
    border-radius: 8px;
    background-color: ${COLORS.primary};
    padding: 13px 0px;
    width: 90%;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-left: 40px;
    color: #ffff;
    // margin-right: 80px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const FormItem = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-left: 40px;
  margin-right: 80px;
  margin-top: 10px;

    .group-button {
        display: flex;
        label {
            min-width: 100px;
        }
    }

  .label-item {
    min-width: 100px;
    margin-right: 15px;
    font-size: 20px;
    font-weight: 520;
    line-height: 120%;
    pading-top:10px;
    }

    .input-item {
      flex: 1;
      border-radius: 5px;
      border: 1.2px solid #ccc;
      outline-color: ${COLORS.primary_auth}
    }
    .radio-item {
      margin-left: 10px;
    }

  }

  .link {
    margin: 0;
    text-align: center;
    width: 100%;
    height: 20px;

    .link-ref {
        color: ${COLORS.primary};
        margin-left: 10px;
        font-size: 16px;

    }

  }

`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.secondary_auth};
`;
export { Container, FormItem, Background };
