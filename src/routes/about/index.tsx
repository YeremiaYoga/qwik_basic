import { component$, useSignal, useStyles$, $ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";
import Modal from "~/components/modal/modal";

export default component$(() => {
  useStyles$(AboutStyles);

  const modalVisible = useSignal(false);

  const closeModal = $(() => {
    modalVisible.value = false;
  });


  return (
    <article>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aperiam
        quas, provident deleniti, rerum aliquam recusandae soluta facere,
        tempora quasi excepturi reiciendis suscipit accusantium esse quae dicta
        asperiores dolorum distinctio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aperiam
        quas, provident deleniti, rerum aliquam recusandae soluta facere,
        tempora quasi excepturi reiciendis suscipit accusantium esse quae dicta
        asperiores dolorum distinctio.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aperiam
        quas, provident deleniti, rerum aliquam recusandae soluta facere,
        tempora quasi excepturi reiciendis suscipit accusantium esse quae dicta
        asperiores dolorum distinctio.
      </p>
      <button onClick$={() => (modalVisible.value = true)}>Open Modal</button>

      {modalVisible.value && (
        <Modal size="sm" frosted={true} close={closeModal}>
          <div q:slot="content">
            <h2>Hallo bang</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              aperiam quas, provident deleniti, rerum aliquam recusandae soluta
              facere, tempora quasi excepturi reiciendis suscipit accusantium
              esse quae dicta asperiores dolorum distinctio.
            </p>
          </div>
          <div q:slot="footer">
            <button>Masuk</button>
          </div>
        </Modal>
      )}
    </article>
  );
});
