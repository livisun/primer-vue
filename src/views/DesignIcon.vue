<template>
  <the-component>
    <template #title> icon </template>
    <template #content>
      <div class="icon-container">
        <div
          v-for="icon of octicons"
          :key="icon"
          class="mt-2 cursor-pointer"
          @click="copyIcon(icon)"
        >
          <pr-icon :name="icon" size="36"></pr-icon>
          <br />
          <span>{{ icon }}</span>
        </div>
      </div>
    </template>
  </the-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheComponent from '../layouts/TheComponent.vue'

export default defineComponent({
  name: 'DesignIcon',
  components: {
    TheComponent
  },
  setup() {
    const octicons: string[] = [
      'alert',
      'archive',
      'arrow-both',
      'arrow-down',
      'arrow-down-left',
      'arrow-down-right',
      'arrow-left',
      'arrow-right',
      'arrow-up',
      'arrow-up-left',
      'arrow-up-right',
      'beaker',
      'bell',
      'bell-fill',
      'bell-slash',
      'bold',
      'book',
      'bookmark',
      'bookmark-fill',
      'bookmark-slash',
      'bookmark-slash-fill',
      'briefcase',
      'broadcast',
      'calendar',
      'check',
      'check-circle',
      'check-circle-fill',
      'checklist',
      'chevron-down',
      'chevron-left',
      'chevron-right',
      'chevron-up',
      'circle',
      'circle-slash',
      'clippy',
      'clock',
      'code',
      'code-review',
      'code-square',
      'comment',
      'comment-discussion',
      'commit',
      'copy',
      'cpu',
      'credit-card',
      'cross-reference',
      'dash',
      'database',
      'desktop-download',
      'device-camera-video',
      'device-desktop',
      'device-mobile',
      'diff',
      'dot',
      'dot-fill',
      'download',
      'eye',
      'eye-slash',
      'file',
      'file-binary',
      'file-code',
      'file-diff',
      'file-directory',
      'file-directory-fill',
      'file-media',
      'file-submodule',
      'file-symlink',
      'file-zip',
      'filter',
      'fire',
      'fold',
      'fold-down',
      'fold-up',
      'gear',
      'gift',
      'git-branch',
      'git-commit',
      'git-compare',
      'git-fork',
      'git-merge',
      'git-pull-request',
      'globe',
      'grabber',
      'graph',
      'heading',
      'heart',
      'heart-fill',
      'history',
      'home',
      'home-fill',
      'horizontal-rule',
      'hourglass',
      'hubot',
      'image',
      'inbox',
      'infinity',
      'info',
      'insights',
      'issue-closed',
      'issue-opened',
      'issue-reopened',
      'italic',
      'kebab-horizontal',
      'key',
      'law',
      'light-bulb',
      'link',
      'link-external',
      'list-ordered',
      'list-unordered',
      'location',
      'lock',
      'mail',
      'megaphone',
      'mention',
      'milestone',
      'mirror',
      'moon',
      'mortar-board',
      'mute',
      'no-entry',
      'north-star',
      'note',
      'organization',
      'package',
      'package-dependencies',
      'package-dependents',
      'paper-airplane',
      'pencil',
      'people',
      'person',
      'pin',
      'play',
      'plug',
      'plus',
      'plus-circle',
      'project',
      'pulse',
      'question',
      'quote',
      'reply',
      'repo',
      'repo-push',
      'repo-template',
      'report',
      'rocket',
      'rss',
      'ruby',
      'screen-full',
      'screen-normal',
      'search',
      'server',
      'settings',
      'share',
      'share-android',
      'shield',
      'shield-check',
      'shield-lock',
      'shield-x',
      'sign-in',
      'sign-out',
      'skip',
      'smiley',
      'square',
      'square-fill',
      'star',
      'star-fill',
      'stop',
      'stopwatch',
      'sun',
      'sync',
      'tab',
      'tag',
      'tasklist',
      'telescope',
      'terminal',
      'thumbsdown',
      'thumbsup',
      'tools',
      'trash',
      'triangle-down',
      'triangle-left',
      'triangle-right',
      'triangle-up',
      'typography',
      'unfold',
      'unlock',
      'unmute',
      'unverifed',
      'upload',
      'verified',
      'versions',
      'workflow',
      'x',
      'x-circle',
      'x-circle-fill',
      'zap'
    ]

    const copyIcon = (val: string) => {
      console.log('copy icon', val)
      copyToClipboard(`<pr-icon name="${val}" size="16"></pr-icon>`)
    }

    /**
     * 新api复制文字到剪贴板
     * @param copyText 要复制的文字
     */
    const copyToClipboard = (copyText: string): void => {
      navigator.clipboard
        .writeText(copyText)
        .then((_) => {
          alert('已复制到剪贴板')
        })
        .catch((err) => {
          alert('复制失败')
          console.error(err)
        })
    }

    return {
      octicons,
      copyIcon
    }
  }
})
</script>

<style lang="scss" scoped>
.icon-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
