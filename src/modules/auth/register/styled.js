import styled from "styled-components";
import COLORS from "../../../themes/colors";
// import { FONTS_SIZE } from "../../../../themes/fonts";
const Container = styled.div`
  font-family: sans-serif;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 25px;
  background-color: ${COLORS.secondary};

  width: 800px;

  .title {
    text-align: center;
    font-weight: 900;
  }
  .errors-message {
    margin-left: 152px;
    color: Red;
    font-size: 16px;
    font-weight: 600;
  }

  .submit-button {
    outline: none;
    border-radius: 4px;
    background-color: ${COLORS.primary};

    padding: 13px 0px;
    width: 100%;
    // color: rgb(255, 255, 255);
    border: none;
    font-size: 20px;
    cursor: pointer;

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

//   background-color: coral;
    .group-button {
        display: flex;
        label {
            min-width: 100px;
        }
    }
  label {
    min-width: 100px;
    margin-right: 15px;
    color: #blue;
    font-size: 20px;
    font-weight: 400;
    line-height: 120%;
    pading-top:10px;

    }

    input {
      flex: 1;
      background-color: #blu;
      border-radius: 1px solid 5px;
    }

  }
  .link {
    margin: 0;
    text-align: center;
    width: 100%;
    height: 20px;

    a {
        color: White;
    }
  }

`;
export { Container, FormItem };
