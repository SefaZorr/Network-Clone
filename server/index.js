const express = require("express");
const path = require("path");
const app = express(),
  bodyParser = require("body-parser");
port = 3081;
const cors = require("cors");
const dummyData = require("./dummy");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../my-app/dist")));

app.get("/", (req, res) => {
  res.send("Selamlar");
});

//done
app.get("/api/cart", (req, res) => {
  res.send(dummyData.dummyCart);
});

//done
app.post("/api/cart/addItem", (req, res) => {
  let itemReq = Object.assign({}, req.body);
  let itemDb = dummyData.dummyCart.items.find((item) => {
    return item.content.id === itemReq.content.id;
  });
  console.log(itemDb);
  if (itemDb?.content.count >= 1) {
    itemDb.content.count++;
  } else {
    dummyData.dummyCart.items.push(itemReq);
  }
  dummyData.dummyCart.total += itemReq.content.price;

  res.send("success");
});

//done
app.post("/api/cart/removeItem", (req, res) => {
  const itemId = Object.assign({}, req.body);
  const item = dummyData.dummyCart.items.find(
    (item) => item.content.id === itemId.id
  );
  if (item?.content.count === 1) {
    dummyData.dummyCart.items.splice(
      dummyData.dummyCart.items.indexOf(item),
      1
    );
    dummyData.dummyCart.total -= item.content.price;
  } else if (item?.content.count > 1) {
    item.content.count--;
    dummyData.dummyCart.total -= item.content.price;
  } else {
    res.send("fail");
  }
  res.send("success");
});

//not needed
app.get("/api/items/summary", (req, res) => {
  const itemsSummary = [];
  const itemIds = [];
  while (itemIds.length < 15) {
    const itemId = Math.floor(Math.random() * dummyData.dummyItems.length);
    if (!itemIds.includes(itemId)) {
      itemIds.push(itemId);
      itemsSummary.push({
        id: dummyData.dummyItems[itemId].content.id,
        name: dummyData.dummyItems[itemId].content.name,
        price: dummyData.dummyItems[itemId].content.price,
        topPhoto: dummyData.dummyItems[itemId].photos[0],
      });
    }
  }
  res.send(itemsSummary);
});
//done
app.get("/api/items", (req, res) => {
  res.send(dummyData.dummyItems);
});
//done
app.get("/api/items/:id", (req, res) => {
  const itemId = req.params.id;
  const item = dummyData.dummyItems.find(
    (item) => item.content.id === parseInt(itemId)
  );
  res.send(item);
});
//done
app.get("/api/items/getByCategoryId/:id", (req, res) => {
  const categoryId = req.params.id;
  const items = dummyData.dummyItems.filter(
    (item) => item.content.categoryId === parseInt(categoryId)
  );

  res.send(getItemsSumarry(items));
});
//done
app.get("/api/items/getBySubCategoryId/:id", (req, res) => {
  const subCategoryId = req.params.id;
  const items = dummyData.dummyItems.filter(
    (item) => item.content.subCategoryId === parseInt(subCategoryId)
  );
  res.send(getItemsSumarry(items));

});

//done
app.get("/api/items/getBySubtitleId/:subTitleId/:id", (req, res) => {
  const subtitleId = req.params.id;
  const items = dummyData.dummyItems.filter(
    (item) => item.content.subtitleId === parseInt(subtitleId) && item.content.subCategoryId === parseInt(req.params.subTitleId)
  );
  res.send(getItemsSumarry(items));

});

//done
app.get("/api/items/getBySearchKey/:key",(req,res)=>{
  const searchKey = req.params.key.toLowerCase();
  
  const items = searchKey !== "*" ? dummyData.dummyItems.filter(
    (item) => item.content.name.toLowerCase().includes(searchKey) || 
              item.content.type.toLowerCase().includes(searchKey) ||
              item.content.price.toString().includes(searchKey)
  )           :dummyData.dummyItems;
  res.send(getItemsSumarry(items.sort(() => Math.random() - 0.5)));
});

function getItemsSumarry(items) {
  const itemsSummary = [];
  items.forEach((item) => {
    itemsSummary.push({
      id: item.content.id,
      name: item.content.name,
      price: item.content.price,
      topPhoto: item.photos[0],
    });
  });
  return itemsSummary;
}


app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
