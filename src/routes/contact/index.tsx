import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";
export default component$(() => {
  useStylesScoped$(ContactStyles);

  const formVisible = useSignal(false);
  const formState = useStore({ name: "", message: "" });
  return (
    <article>
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aperiam
        quas, provident deleniti, rerum aliquam recusandae soluta facere,
        tempora quasi excepturi reiciendis suscipit accusantium esse quae dicta
        asperiores dolorum distinctio.
      </p>
      <button onClick$={() => (formVisible.value = true)}>Contact me</button>

      {formVisible.value && (
        <form
          preventdefault:submit
          onSubmit$={() => {
            console.log(formState.name, formState.message);
            formState.name = "";
            formState.message = "";
          }}
        >
          <label>
            <span>Jenengmu </span>
            <input
              type="text"
              value={formState.name}
              onInput$={(e) =>
                (formState.name = (e.target as HTMLInputElement).value)
              }
            />
          </label>
          <label>
            <span>Pesanmu </span>
            <textarea
              value={formState.message}
              onInput$={(e) =>
                (formState.message = (e.target as HTMLInputElement).value)
              }
            ></textarea>
          </label>

          <button>Kirim</button>
          <p>{formState.name}</p>
          <p>{formState.message}</p>
        </form>
      )}
    </article>
  );
});
