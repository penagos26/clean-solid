import { PostService } from './05-dependency-b';
import { ApiDataBaseService, JsonDataBaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {

    // Instancio la dependencia y la inyrecto en el servicio
    // const provider = new LocalDataBaseService();
    const provider = new ApiDataBaseService();
    // const provider = new JsonDataBaseService(); // Aca aplico el principio de liskov, ya que el servicio no sabe que tipo de proveedor de datos estoy usando, solo sabe que tiene un método getPosts() que devuelve un array de posts

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();