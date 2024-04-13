import { SelectablePage } from "./PageObjects/selectablePage";

describe("DemoQA", () => {
  context("Grid", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Grid", () => {
      SelectablePage.selectGrid.click();

      SelectablePage.selectSquare("Two").click();
      SelectablePage.selectSquare("Four").click();
      SelectablePage.selectSquare("Six").click();
      SelectablePage.selectSquare("Eight").click();

      SelectablePage.selectSquare("Two").should('have.class', 'active');
      SelectablePage.selectSquare("Four").should('have.class', 'active');
      SelectablePage.selectSquare("Six").should('have.class', 'active');
      SelectablePage.selectSquare("Eight").should('have.class', 'active');

      SelectablePage.selectSquare("One").should('not.have.class', 'active');
      SelectablePage.selectSquare("Three").should('not.have.class', 'active');
      SelectablePage.selectSquare("Five").should('not.have.class', 'active');
      SelectablePage.selectSquare("Seven").should('not.have.class', 'active');
      SelectablePage.selectSquare("Nine").should('not.have.class', 'active');
    });
  })
})