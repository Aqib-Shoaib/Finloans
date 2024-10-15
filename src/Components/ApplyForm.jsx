import Subtitle from "./Subtitle";
import Title from "./Title";
import ListBtn from "./ListBtn";
import styled from "styled-components";

const StyledApplyForm = styled.section`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-direction: column;
  border: 1px solid #aaa;
  margin: 10rem 25rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;

  & .inputFields {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.75;
    color: #000;
    padding: 1.25rem;
    border: 1px solid #aaa;
    outline: none;
  }

  & .select {
    color: #aaa;
  }
`;

export default function ApplyForm() {
  return (
    <StyledApplyForm>
      <Title>How much do you want</Title>
      <Subtitle>
        We provide online instant cash loans with quick approval that suit your
        term length
      </Subtitle>
      <Form action="">
        <input
          className="inputFields"
          type="text"
          name=""
          id=""
          placeholder="Your Name"
        />
        <input
          type="email"
          name=""
          id=""
          className="inputFields"
          placeholder="Email"
        />
        <input
          type="number"
          name=""
          id=""
          className="inputFields"
          placeholder="Phone Number"
        />
        <select name="" id="" className="inputFields select">
          <option value="">Purpose 1</option>
          <option value="">Purpose 2</option>
          <option value="">Purpose 3</option>
        </select>
        <select className="inputFields select" name="" id="">
          <option value="">10$</option>
          <option value="">20$</option>
          <option value="">100$</option>
        </select>
        <input
          type="date"
          name=""
          placeholder="Month"
          id=""
          className="inputFields"
        />

        <textarea
          name=""
          id=""
          className="inputFields"
          placeholder="Message"
        ></textarea>

        <ListBtn>Apply Now</ListBtn>
      </Form>
    </StyledApplyForm>
  );
}
