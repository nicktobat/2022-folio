<script>
  import { base } from '$app/paths';
  export const prerender = true;
</script>


<h4>The following motion animations were created in InVision Studio. Hover or tap to check 'em out.</h4>
<article>
  <div class="imgWrap">
    <img class="image" src="{base}/ixd/nike.png" alt="nike" />
    <img class="gif" src="{base}/ixd/nike.gif" alt="nike" />
    <div class="phone"></div>
  </div>

  <div class="imgWrap">
    <img class="image" src="{base}/ixd/reserve.png" alt="reserve" />
    <img class="gif" src="{base}/ixd/reserve.gif" alt="reserve" />
    <div class="phone"></div>
  </div>

  <div class="imgWrap">
    <img class="image" src="{base}/ixd/menu.png" alt="menu" />
    <img class="gif" src="{base}/ixd/menu.gif" alt="menu" />
    <div class="phone"></div>
  </div>
</article>


<style lang="scss">
  h4 {
    font-family: 'Forum';
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 40px;
  }
  
  article {
    display: flex;
    margin: -24px 0 0 -24px;

    .imgWrap {
      position: relative;
      margin: 24px;

      img {
        width: 245px;
        height: 542px;
        padding: 16px 20px;

        &.gif {
          display: none;
        }
      }

      &:hover {
        img.gif {
          display: inline;
        }
        img.image {
          display: none;
        }
      }

      div.phone {
        position: absolute;
        top: 0;
        left: 0;
        width: 284px;
        height: 574px;
        background-image: url('ixd/iphonex_2.png');
        background-size: 100% 100%;
        z-index: 9;
      }
    }
  }
</style>
