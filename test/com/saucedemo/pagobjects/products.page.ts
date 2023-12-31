import BasePage from "./base.page.ts";

class ProductsPage extends BasePage {
  get inventoryList() {
    return $$("[class='inventory_list'] > div");
  }
  async getFirstProductPrice() {
    return await this.inventoryList[0]
      .$("[class='inventory_item_price']")
      .getText();
  }
  async addProductToCartByIndex(index: number) {
    await this.inventoryList[index]
      .$("#add-to-cart-sauce-labs-backpack")
      .click();
  }
}

export default new ProductsPage();
