<script>
  import Icon from '$lib/Icon.svelte';

  export let href;
  export let name;
  export let desc;
  export let src;
  export let color;
  export let bgColor;
  export let tags =[];
</script>


<a {href}>
  <article style="--theme-color: {color}; --bg-color: {bgColor}">
    <div class="imgWrap">
      <img {src} alt="preview img" />
    </div>
    <section>
      <h2>{name}</h2>
      <p>{desc}</p>
      <ul>
        {#each tags as tag}
          <li>{tag}</li>
        {/each}
      </ul>
      <div>
        <p>View Project</p>
        <Icon title="arrow-right" />
      </div>
    </section>
  </article>
</a>


<style lang="scss">
  a {
    display: block;
    max-width: 800px;
    cursor: pointer;
  }
  article {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 800px;
    height: auto;
    border: 4px solid var(--theme-color, black);
    border-radius: 8px;
    background-color: rgba(var(--bg-color), 0.12);
    overflow: hidden;
    margin-bottom: 40px;

    .imgWrap {
      height: 272px;
      width: 272px;

      img {
        height: 272px;
        width: 272px;
        object-fit: cover;
      }
    }

    section {
      display: flex;
      flex-flow: column nowrap;
      padding: 32px 40px;

      > :not(:first-child) {
        margin-top: 20px;
      }

      p {
        font-size: 18px;
        line-height: 24px;
      }

      ul {
        list-style: none;
        display: flex;

        li {
          padding: 0 8px;
          font-size: 14px;
          line-height: 24px;
          border-radius: 24px;
          color: $white;
          background-color: $black;

          &:not(:first-child) {
            margin-left: 8px;
          }
        }
      }

      div {
        display: flex;
      }
    }
  }
</style>