<template>
  <div class="hello">
    <x-header :title="title"
              :left-options="{showBack: false}"></x-header>
    <div class="content">
      <div class="menu-wrap"
           ref="menuWrapper">
        <ul>
          <li v-for="(item, index) in goodsTypes"
              :key="index"
              class="menu-bar-item"
              :class="{'current': currentIndex == index}"
              @click="selectMenu(index, $event, '#anchor-'+index)">
            <img class="icon"><img>
            <span class="text">
              {{item.label}}
            </span>
          </li>
        </ul>
      </div>
      <div class="bscroll"
           ref="bscroll">
        <div class="bscroll-container">
          <div class="scroll-nav-panel food-list-hook"
               v-for="(item, index) in goodsList"
               :key="index"
               ref="current-li">
            <div :id="'anchor-'+index"
                 class="cube-sticky-ele">{{item.title}}</div>
            <ul>
              <li class="good-item"
                  v-for="(chiItem, index2) in item.children"
                  :key="index2">
                {{chiItem.title}}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader } from 'vux'
import BScroll from 'better-scroll'
const goodsTypes = [
  {
    label: '女装',
    img: require('../assets/icon_nav_article.png')
  },
  {
    label: '男装',
    img: require('../assets/icon_nav_cell.png')
  },
  {
    label: '数码',
    img: require('../assets/icon_nav_button.png')
  },
  {
    label: '食品',
    img: require('../assets/icon_nav_actionSheet.png')
  },
  {
    label: '鞋靴',
    img: require('../assets/icon_nav_dialog.png')
  },
  {
    label: '内衣',
    img: require('../assets/icon_nav_button.png')
  },
  {
    label: '美妆',
    img: require('../assets/icon_nav_panel.png')
  },
  {
    label: '箱包',
    img: require('../assets/icon_nav_icons.png')
  },
  {
    label: '家电',
    img: require('../assets/icon_nav_toast.png')
  },
  {
    label: '百货',
    img: require('../assets/icon_nav_button.png')
  }
]

const goodsList = [
  {
    title: '女装',
    children: [
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015235404&di=d381a6334c17ef060c9d0011c3180323&imgtype=0&src=http%3A%2F%2Fpic1.cxtuku.com%2F00%2F09%2F85%2Fb4943aac377e.jpg',
        title: '送你一朵花'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015175654&di=03f3489a0bf9b3e43fd685ee4bcb84a2&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F07%2F20141107164412_v284V.jpeg',
        title: '送你一次旅行'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015280633&di=59cca6c544f68b6e43eafa6a7688b623&imgtype=0&src=http%3A%2F%2Fpic168.nipic.com%2Ffile%2F20180607%2F4587115_105940147031_2.jpg',
        title: '送你一顿美食'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015297864&di=d3159b6bfd6a6eb7fbb3bda299e1118e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3804079cb84b828dc620501323a72e29a50e54328922-JRfbnX_fw658',
        title: '送你一个笑脸'
      }]
  },
  {
    title: '男装',
    children: [
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015235404&di=d381a6334c17ef060c9d0011c3180323&imgtype=0&src=http%3A%2F%2Fpic1.cxtuku.com%2F00%2F09%2F85%2Fb4943aac377e.jpg',
        title: '送你一朵花'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015175654&di=03f3489a0bf9b3e43fd685ee4bcb84a2&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F07%2F20141107164412_v284V.jpeg',
        title: '送你一次旅行'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015280633&di=59cca6c544f68b6e43eafa6a7688b623&imgtype=0&src=http%3A%2F%2Fpic168.nipic.com%2Ffile%2F20180607%2F4587115_105940147031_2.jpg',
        title: '送你一顿美食'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015297864&di=d3159b6bfd6a6eb7fbb3bda299e1118e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3804079cb84b828dc620501323a72e29a50e54328922-JRfbnX_fw658',
        title: '送你一个笑脸'
      }]
  },
  {
    title: '数码',
    children: [
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015235404&di=d381a6334c17ef060c9d0011c3180323&imgtype=0&src=http%3A%2F%2Fpic1.cxtuku.com%2F00%2F09%2F85%2Fb4943aac377e.jpg',
        title: '送你一朵花'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015175654&di=03f3489a0bf9b3e43fd685ee4bcb84a2&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F07%2F20141107164412_v284V.jpeg',
        title: '送你一次旅行'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015280633&di=59cca6c544f68b6e43eafa6a7688b623&imgtype=0&src=http%3A%2F%2Fpic168.nipic.com%2Ffile%2F20180607%2F4587115_105940147031_2.jpg',
        title: '送你一顿美食'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015297864&di=d3159b6bfd6a6eb7fbb3bda299e1118e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3804079cb84b828dc620501323a72e29a50e54328922-JRfbnX_fw658',
        title: '送你一个笑脸'
      }]
  },
  {
    title: '食品',
    children: [
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015235404&di=d381a6334c17ef060c9d0011c3180323&imgtype=0&src=http%3A%2F%2Fpic1.cxtuku.com%2F00%2F09%2F85%2Fb4943aac377e.jpg',
        title: '送你一朵花'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015175654&di=03f3489a0bf9b3e43fd685ee4bcb84a2&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F07%2F20141107164412_v284V.jpeg',
        title: '送你一次旅行'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015280633&di=59cca6c544f68b6e43eafa6a7688b623&imgtype=0&src=http%3A%2F%2Fpic168.nipic.com%2Ffile%2F20180607%2F4587115_105940147031_2.jpg',
        title: '送你一顿美食'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015297864&di=d3159b6bfd6a6eb7fbb3bda299e1118e&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3804079cb84b828dc620501323a72e29a50e54328922-JRfbnX_fw658',
        title: '送你一个笑脸'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015235404&di=d381a6334c17ef060c9d0011c3180323&imgtype=0&src=http%3A%2F%2Fpic1.cxtuku.com%2F00%2F09%2F85%2Fb4943aac377e.jpg',
        title: '送你一朵花'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015175654&di=03f3489a0bf9b3e43fd685ee4bcb84a2&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F07%2F20141107164412_v284V.jpeg',
        title: '送你一次旅行'
      },
      {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547015280633&di=59cca6c544f68b6e43eafa6a7688b623&imgtype=0&src=http%3A%2F%2Fpic168.nipic.com%2Ffile%2F20180607%2F4587115_105940147031_2.jpg',
        title: '送你一顿美食'
      }
    ]
  }
]
export default {
  name: 'group',
  components: {
    XHeader
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.rightListHeight.length; i++) {
        let height1 = this.rightListHeight[i]
        let height2 = this.rightListHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i
        }
      }
      return 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  created () {
    setTimeout(() => {
      this._calculateHeight()
    }, 500)
  },
  methods: {
    _initScroll () {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.aBScroll = new BScroll(this.$refs.bscroll, {
        click: true,
        probeType: 3
      })
      this.aBScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    selectMenu (index, e, selector) {
      console.log(index)
      if (!e._constructed) {
        return
      }
      let goodsList = this.$refs.bscroll.getElementsByClassName('food-list-hook')
      let el = goodsList[index]
      this.aBScroll.scrollToElement(el, 300)
    },
    _calculateHeight () {
      let Height = 0
      this.rightListHeight.push(Height)
      let currentLi = this.$refs['current-li']
      currentLi.forEach(item => {
        Height += item.clientHeight
        this.rightListHeight.push(Height)
      })
    }
  },
  data () {
    return {
      title: '分类',
      // currentIndex: 0,
      goodsTypes: goodsTypes,
      goodsList: goodsList,
      rightListHeight: [],
      scrollY: 0
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.bscroll {
  height: 400px;
  overflow: hidden;
  background: #fff;
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.bscroll-container {
  width: 100%;
  // height: 100%;
}
.menu-wrap {
  width: 60px;
  height: 400px;
  position: relative;
  left: 0;
}
.menu-wrap ul {
  width: 100%;
  margin: 0;
  padding: 0;
}
.menu-bar-item {
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 12px;
  height: 50px;
  line-height: 14px;
  padding: 0 10px;
}
.current {
  background: #ffffff;
}
.cube-sticky-ele {
  width: 100%;
  height: 26px;
  line-height: 26px;
  background: #efeff4;
  font-size: 14px;
  color: #000;
  position: relative;
  top: 0;
  right: 0;
  border-left: 1px solid rgb(134, 134, 134);
}
.scroll-nav-panel {
  // position: relative;
}
.good-item {
  display: flex;
  margin: 18px;
  padding-bottom: 18px;
  position: relative;
}
</style>
