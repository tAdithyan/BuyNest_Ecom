exports.userQuery = 'SELECT * FROM public.users WHERE email = $1';

exports.registerUserQuery = `
INSERT INTO public.users (user_id, username, email, password_hash, created_at, updated_at)
VALUES ($1, $2, $3, $4, NOW(), NOW())
RETURNING *;
`;

exports.allproducts = 'SELECT * FROM public.products ORDER BY product_id ASC';

exports.insertProduct = 'INSERT INTO public.products( product_id, products_name, description, price, stock_quantity, category_id, created_at, updated_at, image_url)VALUES ($1, $2, $3, $4, $5, $6, Now(), Now(), $7);'

exports.updateProduct = `UPDATE public.products SET  products_name=$1, description=$2, price=$3, stock_quantity=$4, category_id=$5, image_url=$6 WHERE product_id = $7;`

exports.deleteProduct = 'DELETE FROM public.products WHERE product_id = $1 ;'