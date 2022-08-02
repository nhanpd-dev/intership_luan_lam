import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
  color: #333;
  font-family: sans-serif;
  text-align: center;

  .form-title {
    margin: auto;
    font-size: 32px;
    width: 100%;
  }

  .form-label {
    color: #393333;
    display: block;
    font-size: 16px;
    margin-bottom: 4px;
  }

  .form-input {
    color: #ccc;
  }

  .error-message {
    color: #d41a1a;
    font-size: 12px;
    margin: 4px 0 8px 0;
  }

  .submit-item {
    margin: 12px 0;

    .submit-button {
      outline: none;
      border-radius: 4px;
      background: #ff424e;
      padding: 13px 0px;
      width: 100%;
      color: #ffffff;
      border: none;
      font-size: 20px;
      cursor: pointer;
  
      &:hover {
        opacity: 0.8;
      }
    }
  }


  .link {
    margin: 0;
    text-align: center;
    width: 100%;
    height: 20px;

    .link-navigate {
      color: #331dc6;
    }
  }
}

// Mobile and Tablet
@media (max-width: 1023px) {

  .error-message {
    font-size: 14px;
  }
}

@media (min-width: 740px) and (max-width: 1023px) {
  
}

// Mobile
@media (max-width: 739px) {
  
  .form-title {
    width: 96vw;
  } 
  
`;

const Form = styled.form`
  padding: 6px 12px;
  box-shadow: 5px 5px 8px #888;
  border-radius: 6px;
  display: block;
  margin: 0 auto;
  text-align: left;
  width: 54vw;
  background-image: linear-gradient(90deg, #add1f0, #7fa2c7);

  @media (min-width: 740px) and (max-width: 1023px) {
    width: 80vw;
  }

  @media (max-width: 739px) {
    width: 96vw;
  }
`;

const FormItem = styled.div`
  margin: 10px 0;

  .form-input {
    width: 100%;
    height: 32px;
    border: none;
    border-radius: 3px;
    outline: none;

    @media (max-width: 739px) {
      height: 44.8px;
      font-size: 16px;
    }
  }
`;

const SubmitItem = styled.div`
  margin: 12px 0;

  @media (max-width: 739px) {
    .link {
      height: 24px;
      font-size: 16px;
    }
  }
`;

export { Container, FormItem, SubmitItem, Form };
