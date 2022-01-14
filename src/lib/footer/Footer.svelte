<script>
	import { page } from '$app/stores';
  import Snackbars from '$lib/snackbar/Snackbars.svelte'
  import { addToast } from '$lib/snackbar/store';
  import logo from './logo.svg'
  import Clipboard from 'svelte-clipboard'
  import Icon from '$lib/Icon.svelte'

  console.log($page.url.pathname);
</script>


<footer class:darkmode="{$page.url.pathname.includes('/prod/')}">

  <hr />

  <div class="sections">
    <section>
      <p>    
        This website is typeset in Forum & Days One,<br />
        deployed through Github Pages, designed in Figma,<br />
        and developed in Svelte by yours truly.
        <br /><br />
        Last updated November 30 2021.
      </p>
    </section>
    <section class="links">
      <div class="link">
        <Clipboard
          text="ntobat@gmail.com"
          let:copy
          on:copy={() => {
            addToast({
              message: "Copied to clipboard!",
              dismissable: true,
              timeout: 2000
            })
          }}
        >
          <button title="Copy" on:click={copy}>
            <Icon title="copy" />
          </button>
        </Clipboard>
        <a href="//mailto:ntobat@gmail.com" target="_blank" title="Visit Link">ntobat@gmail.com</a>
      </div>
      <div class="link">
        <Clipboard
          text="linkedin.com/in/nicktobat"
          let:copy
          on:copy={() => {
            addToast({
              message: "Copied to clipboard!",
              dismissable: true,
              timeout: 2000
            })
          }}
        >
          <button title="Copy" on:click={copy}>
            <Icon title="copy" />
          </button>
        </Clipboard>
        <a href="//linkedin.com/in/nicktobat" target="_blank" title="Visit Link">linkedin.com/in/nicktobat</a>
      </div>
      <div class="link">
        <Clipboard
          text="github.com/nicktobat"
          let:copy
          on:copy={() => {
            addToast({
              message: "Copied to clipboard!",
              dismissable: true,
              timeout: 2000
            })
          }}
        >
          <button title="Copy" on:click={copy}>
            <Icon title="copy" />
          </button>
        </Clipboard>
        <a href="//github.com/nicktobat" target="_blank" title="Visit Link">github.com/nicktobat</a>
      </div>
    </section>
    <section>
      <a href="/">
        <Icon title="logo" width="32px" height="32px" />
      </a>
    </section>
  </div>
  
  <Snackbars />

</footer>


<style lang="scss">

  footer {
    margin: 0 80px;
    padding: 0 64px 40px 64px;
    width: calc(100% - 208px);
    font-family: 'Forum';

    hr {
      margin: 40px 0;
    }

    div.sections {
      margin: 0 64px;
      display: flex;
      align-items: center;
      max-width: 100%;

      section {

        p, a {
          font-size: 18px;
          line-height: 24px;
          color: $black;
        }

        &:not(:first-child) {
          margin-left: 160px;
        }

        &:last-child {
          flex-grow: 2;
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          align-self: end;
          
          a {
            padding: 8px;
            border-radius: 8px;
            transition: background-color 600ms;
            cursor: pointer;
            height: 32px;

            :globla(svg) {
              height: 32px;
              width: 32px;
            }

            &:hover {
              background-color: rgba(0,0,0,0.12);
            }
          }
        }

        &.links {
          .link {
            display: flex;
            align-items: center;
            cursor: pointer;

            &:not(:last-child) {
              margin-bottom: 4px;
            }

            button {
              border: 0;
              height: 40px;
              width: 40px;
              background-color: unset;
              border-radius: 8px;
              padding: 8px;
              transition: background-color 600ms;
              cursor: pointer;

              &:hover {
                background-color: rgba(0,0,0,0.12);
              }
            }

            a {
              text-decoration: underline;
              display: inline-block;
              padding: 8px;
              border-radius: 8px;
              transition: background-color 600ms;
              cursor: pointer;

              &:hover {
                background-color: rgba(0,0,0,0.12);
              }
            }
          }
        }
      }
    }

    &.darkmode {
      background-color: $black;

      div.sections {

        section {
          
          a, p {
            color: $white;
          }

          &.links {
            .link {
              button {
                &:hover {
                  background-color: rgba(255,255,255,0.12);
                }
                :global(svg) {
                  fill: $white;
                }
              }
              a {
                &:hover {
                  background-color: rgba(255,255,255,0.12);;
                }
              }
            } 
          }

          &:last-child {
            a {
              :global(svg) {
                fill: $white;
              }
              &:hover {
                background-color: rgba(255,255,255,0.12);
              }
            }
          }
        }

      }

    }
  }

  @media screen and (max-width: 600px) {

    footer {
      div.sections {
        flex-flow: column;
  
        section {
  
          &:not(:first-child) {
            margin-top: 32px;
            margin-left: unset;
          }
          &:last-child {
            justify-content: flex-start;
          }
        }
      }
    }
  }

</style>