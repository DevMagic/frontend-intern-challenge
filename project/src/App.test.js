import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe("Home Page", () =>{
  test("Rendering elements of page", async () =>{
    const {getByPlaceholderText, getByText, getByTestId, getAllByTestId} = render(<App/>)

    expect(getByTestId("devMagic")).toBeInTheDocument()
    expect(getByText("Encurte seus links")).toBeInTheDocument()
    expect(getByText(
      "Links são longos. Encurte os links que você deseja compartilhar, e acompanhe enquanto viajam através da internet"))
      .toBeInTheDocument()
    expect(getByPlaceholderText("Cole o seu link aqui")).toBeInTheDocument()
    expect(getByTestId("button")).toBeInTheDocument()
    expect(getByText("TOP 5")).toBeInTheDocument()
    expect(getAllByTestId("top-five"))
    expect(getByText("HITS")).toBeInTheDocument()
    expect(getByTestId("hits")).toBeInTheDocument()  
    expect(getByText("Cliques em links")).toBeInTheDocument()
  });

  test("running the interaction", async () =>{
    const {getByPlaceholderText, getByText} = render(<App/>)

    const input = getByPlaceholderText("Cole o seu link aqui")
    await userEvent.type(input, "http://test.com")
    expect(input).toHaveValue("http://test.com")
    const buttonClickable = getByText("ENCURTAR")
    fireEvent.click(buttonClickable)
    buttonClickable = getByText("COPIAR")
    fireEvent.click(buttonClickable)
    expect(input).toHaveValue("")
  });
})

