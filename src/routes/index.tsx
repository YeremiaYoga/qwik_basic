import { component$, Resource, useSignal, useStore } from "@builder.io/qwik";
import {
  DocumentHead,
  Link,
  RequestHandler,
  routeLoader$,
} from "@builder.io/qwik-city";
import Card from "~/components/card/card";

// interface BlogData {
//   id: string;
//   title: string;
//   content: string;
// }
export const useBlogs = routeLoader$(async () => {
  console.log("fetching data");
  const res = await fetch("http://localhost:3000/blogs");
  const data = await res.json();

  return data;
});
// export const onGet: RequestHandler<BlogData[]> = async () => {
//   console.log("fetching data");
//   const res = await fetch("http://localhost:3000/blogs");
//   const data = await res.json();

//   return data;
// };

export default component$(() => {
  const blogsData = useBlogs();

  // const blogsData = useEndpoint<BlogData[]>()
  // const name = useSignal("bang");

  // const person = useStore({ name: "joko", age: 30 });

  // const blogs = useStore([
  //   { id: 1, title: "pertama" },
  //   { id: 2, title: "kedua" },
  //   { id: 3, title: "ketiga" },
  // ]);
  return (
    <div>
      <h2>Cekidot</h2>
      <Resource
        value={blogsData}
        onPending={() => <div>Loading...</div>}
        onResolved={(blogs) => (
          <div class="blogs">
            {blogs &&
              blogs.map((blog: any) => (
                <Card key={blog.id}>
                  <h3 q:slot="title">{blog.title}</h3>
                  <p q:slot="content">{blog.content.slice(0, 50)}...</p>
                  <Link q:slot="footer" href={"/blog/" + blog.id}>
                    <button>Read More</button>
                  </Link>
                </Card>
              ))}
          </div>
        )}
      />
      {/* <p>Halo, {name.value}</p>
      <p>
        Halo, {person.name} - {person.age}
      </p>

      <button onClick$={() => (name.value = "paidi")}>Click</button>
      <button onClick$={() => (person.name = "asep")}>Click gan</button>

      {blogs.map((blog) => (
        <div key={blog.id}>{blog.title}</div>
      ))}

      <button onClick$={() => blogs.pop()}>remove blog</button> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Halo Bang",
  meta: [
    {
      name: "description",
      content: "Ngewangi bouz",
    },
  ],
  links: [
    {
      rel: "stylesheet",
      href: "somestylesheet.com/styles.css",
    },
  ],
};
