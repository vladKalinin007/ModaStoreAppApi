import {BaseController} from "./base.controller";
import {BasketService} from "../../infrastructure/services/customer/basket.service";
import {Get} from "@nestjs/common";
import {ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags("Basket")
export class BasketController extends BaseController {

    constructor(private readonly _basketService: BasketService) {
        super();
    }

    @Get("/basket")
    @ApiResponse({ status: 200, description: 'Returns the basket' })
    public setBasket(): void {
        this._basketService.setBasket();
    }
}
