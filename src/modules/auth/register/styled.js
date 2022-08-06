import styled from "styled-components";
import COLORS from "../../../themes/colors";

const Container = styled.div`
box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;
  padding-top: 20px;
  overflow: hidden;
  background-color: #ffffff;
  boder: 1px solid #888888;
  box-shadow: 5px 10px #888888;
  flex: 1;

  .title {
    text-align: center;
    font-weight: 600;
    padding-bottom:20px;
    color: ${COLORS.primary};

  }

  .errors-message {
    height: 10px;
    margin-left: 160px;

    color: #ff0000;
    font-size: 14px;
    font-weight: 400;
  }

  .submit-button {
    box-sizing: border-box;
    outline: none;
    border-radius: 30px;  
    background-color: ${COLORS.primary};
    padding: 20px 0px;
    width: 90%;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-top:20px;
    margin-left: 40px;
    color: #ffff;
    // margin-right: 80px;

    &:hover {
      opacity: 0.8;
    }
  }

  // Mobile and Tablet
@media (max-width: 1023px) {

}

@media (min-width: 820px) and (max-width: 1079px) {

}


// Mobile
@media (max-width: 819px) {
  .title {
    text-align: center;
    font-weight: 800;
    font-size: 20px;
    padding-bottom:80px;
  }

  .errors-message {
    height: 4px;
    margin-left: 140px;
    padding:0;
    color: #ff0000;
    font-size: 10px;
    font-weight: 600;
  }

  .submit-button {
    padding: 10px 0px;
    width: 90%;
    border: none;
    font-size: 18px;
    margin-top:20px;
    margin-left: 20px;
    color: #ffff;
  }
 
  

`;

const FormItem = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0px 80px 0px 40px;

  input[type] {
    padding: 0px 18px;
  }

  .label-item {
    min-width: 100px;
    margin-right: 15px;
    font-size: 14px;
     font-weight: bold;
    line-height: 260%;
    color: ${COLORS.primary};

 
    }


    .input-item {
      height: 40px;
      flex: 1;
      border-radius: 25px;
      font-size: 24px;
      border: 1.2px solid #ccc;
      outline-color: ${COLORS.primary_auth}
    }
    .select-form {
      padding: 0px 40px;

    }
    
  }

  .link {
    margin: 0;
    text-align: center;
    width: 100%;
    height: 20px;
    font-size: 20px;
    color: #888777;

    .link-ref {
        color: ${COLORS.primary};
        margin-left: 10px;
        font-size: 20px;
    

    }

  }

  // Mobile and Tablet
  @media (max-width: 1023px) {
  
  
  }
  
  @media (min-width: 820px) and (max-width: 1079px) {
  }
  
  // Mobile
  @media (max-width: 819px) {
    margin :0 10px ;

    input[type] {
      padding: 0px 10px;
    }

    .label-item {
      min-width: 100px;
      margin-right: 15px;
      font-size: 16px;
       font-weight: bold;
      line-height: 260%;
      }

    .input-item {
          height: 40px;
          width: 100px;
          flex: 1;
          border-radius: 25px;
          font-size: 18px;
          border: 1.2px solid #ccc;
          outline-color: ${COLORS.primary_auth}
        }

        .select-form {
          padding: 0px 40px;
        }
      }
    
    .link {
        margin: 0;
        text-align: center;
        width: 100%;
        height: 20px;
        font-size: 20px;
        color: #888777;
    
      .link-ref {
            color: ${COLORS.primary};
            margin-left: 10px;
            font-size: 20px;
        }
    }
`;
const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.secondary_auth};
`;
const Img = styled.div`
  height: inherit;
  display: block;

  .img-register {
    height: 100%;
  }

  // Mobile and Tablet
  @media (max-width: 1023px) {
  }

  @media (min-width: 820px) and (max-width: 1079px) {
    display: none;
  }

  // Mobile
  @media (max-width: 819px) {
    display: none;
  }
`;
export { Container, FormItem, Background, Img };
