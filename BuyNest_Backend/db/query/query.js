exports.userQuery = 'SELECT * FROM public.users WHERE email = $1';

exports.registerUserQuery = `
INSERT INTO public.users (user_id, username, email, password_hash, created_at, updated_at)
VALUES ($1, $2, $3, $4, NOW(), NOW())
RETURNING *;
`;

exports.allproducts = 'SELECT * FROM public.products ORDER BY product_id ASC';

exports.insertProduct = 'INSERT INTO public.products( product_id, products_name, description, price, stock_quantity, category_id, created_at, updated_at, image_url)VALUES ($1, $2, $3, $4, $5, $6, Now(), Now(), $7);'

exports.updateProduct = `UPDATE public.products SET  products_name=COALESCE($1 ,products_name), description=($2,description), price=COALESCE($3,price), stock_quantity=COALESCE($4,stock_quantity), category_id=COALESCE($5, category_id ), image_url=COALESCE($6,image_url) WHERE product_id = $7;`


exports.deleteProduct = 'DELETE FROM public.products WHERE product_id = $1 ;'


//cart

exports.insertProduct_to_Cart = 'INSERT INTO public.cart("userId", "productId", quantity) VALUES ($1, $2, $3);'


exports.allcartitems = 'SELECT * FROM public.cart WHERE "userId" = $1;'

exports.updatecart = 'UPDATE public.cart SET  "productId"=COALESCE($2,"productId"), quantity=COALESCE($3,quantity) WHERE "userId" = $1;'
exports.deleteproductfromcart = 'DELETE FROM public.cart WHERE "productId" = $1 AND "userId" = $2;';


// user


exports.selectuserbyid = 'SELECT * FROM public.users WHERE user_id=$1;';
exports.updateprofile = `UPDATE public.users SET username = COALESCE($1, username),email = COALESCE($2, email),password_hash = COALESCE($3, password_hash),role = COALESCE($4, roleWHERE user_id = $5;`;

//category

exports.getallcategories =   'SELECT * FROM public.categories';
