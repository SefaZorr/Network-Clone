
export function convertItemToCartObject(item){
    let newItem={
        content:{
            id: item.content.id,
            description: item.content.name,
            count:1,
            size:item.chosenSize,
            color:item.chosenColor,
            colorCode:item.chosenColorCode,
            price:item.content.price,
            totalPrice:item.content.price,
        },
        image:item.cartImage,
    }
    return newItem;
}

