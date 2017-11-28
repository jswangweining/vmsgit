<style lang="scss">

@import "../assets/scss/common.scss";
.menulist {
    margin-top: 2rem;
}

.menulistitem {
    font-size: 0.7rem;
    line-height: 0.9rem;
    color: #ccc;
    padding: 0.9rem 0px;
    text-align: left;
    transition: background-color 1s;
    cursor: pointer;
    padding-left: 1rem;
}

.menulistitem:hover {
    background-color: #5277ce;
    color: #fff;
}

.menulistitemc {
    background-color: #5277ce;
    color: #fff;
}

.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */

{
    transform: translateX(10px);
    opacity: 0;
}

</style>

<template>

<div class="">
    <transition name="slide-fade" mode="out-in">
        <div class="menulist" v-if='naveactive==0' key='首页'>
            <div class="menulistitem" v-for="(item,index) in subnavlist[0]" @click='subnavclick($event,item.rel)' :class="index==0 ? 'menulistitemc' : ''">
                {{item.name}}
            </div>
        </div>


        <div class="menulist" v-if='naveactive==1' key='商品'>
            <div class="menulistitem" v-for="(item,index) in subnavlist[1]" @click='subnavclick($event,item.rel)' :class="index==0 ? 'menulistitemc' : ''">
                {{item.name}}
            </div>
        </div>

        <div class="menulist" v-if='naveactive==2' key='订单'>
            <div class="menulistitem" v-for="(item,index) in subnavlist[2]" @click='subnavclick($event,item.rel)' :class="index==0 ? 'menulistitemc' : ''">
                {{item.name}}
            </div>
        </div>

        <div class="menulist" v-if='naveactive==3' key='会员'>
            <div class="menulistitem" v-for="(item,index) in subnavlist[3]" @click='subnavclick($event,item.rel)' :class="index==0 ? 'menulistitemc' : ''">
                {{item.name}}
            </div>
        </div>

        <div class="menulist" v-if='naveactive==4' key='促销'>
            <div class="menulistitem" v-for="(item,index) in subnavlist[4]" @click='subnavclick($event,item.rel)' :class="index==0 ? 'menulistitemc' : ''">
                {{item.name}}
            </div>
        </div>

        <div class="menulist" v-if='naveactive==5' key='汇天眼'>
            <div class="menulistitem" v-for="(item,index) in subnavlist[5]" @click='subnavclick($event,item.rel)'>
                {{item.name}}
            </div>
        </div>
    </transition>
</div>

</template>

<script>

import $ from 'jquery'

export default {
    props: ['naveactive','subnamepath','btnClick'],
    data: () => ({
        subnavlist: [
            [{
                'name': '首页',
                'rel': ''
            }, {
                'name': '首页',
                'rel': ''
            }, {
                'name': '首页',
                'rel': ''
            }, {
                'name': '首页',
                'rel': ''
            }, {
                'name': '首页',
                'rel': ''
            }, {
                'name': '首页',
                'rel': ''
            }],
            [{
                'name': '商品',
                'rel': ''
            }, {
                'name': '商品',
                'rel': ''
            }, {
                'name': '商品',
                'rel': ''
            }, {
                'name': '商品',
                'rel': ''
            }, {
                'name': '商品',
                'rel': ''
            }, {
                'name': '商品',
                'rel': ''
            }],
            [{
                'name': '订单',
                'rel': ''
            }, {
                'name': '订单',
                'rel': ''
            }, {
                'name': '订单',
                'rel': ''
            }, {
                'name': '订单',
                'rel': ''
            }, {
                'name': '订单',
                'rel': ''
            }, {
                'name': '订单',
                'rel': ''
            }],
            [{
                'name': '会员',
                'rel': ''
            }, {
                'name': '会员',
                'rel': ''
            }, {
                'name': '会员',
                'rel': ''
            }, {
                'name': '会员',
                'rel': ''
            }, {
                'name': '会员',
                'rel': ''
            }, {
                'name': '会员',
                'rel': ''
            }],
            [{
                'name': '促销',
                'rel': ''
            }, {
                'name': '促销',
                'rel': ''
            }, {
                'name': '促销',
                'rel': ''
            }, {
                'name': '促销',
                'rel': ''
            }, {
                'name': '促销',
                'rel': ''
            }, {
                'name': '促销',
                'rel': ''
            }],

            [{
                'name': '业务效率',
                'rel': 'ywxl'
            },
            {
                'name': '财务效率',
                'rel': 'cwxl'
            },
            {
                'name': '选品定价',
                'rel': 'xpdj'
            },
            {
                'name': '会员概览',
                'rel': 'yhfx'
            },
            {
                'name': '会员对比',
                'rel': 'yhfn'
            },{
                'name': '质量提升',
                'rel': 'mbyhgl'
            }, {
                'name': '商城热点',
                'rel': 'yhxw'
            }]
        ],

    }),
    watch:{

    },
    mounted() {
      let _this=this;

      var arr=_this.subnavlist[_this.naveactive];
      var res=arr.forEach(function(item,index){
        if(item.rel==_this.subnamepath)
        {
            $('.menulistitemc').removeClass('menulistitemc');
            $('.menulistitem:eq('+index+')').addClass('menulistitemc')
        }
      })

      // var res=arr.find(function(item,index){
      //   return item.rel==_this.subnamepath
      // })
      // console.log(res)
      // for(let i=0;i++;i<arr.length)
    },
    methods: {
        subnavclick: function(event, rel) {
            var _this = this;
            var el = event.target;
            if(_this.btnClick)
            {
              $('.menulistitemc').removeClass('menulistitemc');
              $(el).addClass('menulistitemc');
              _this.$router.push({
                  name: rel,
                  query:{
                    'userId': _this.$store.state.userId,
                    'ticket':_this.$store.state.ticket,
                    'userName':_this.$store.state.userName
                  }
              })
            }

        }
    },
    components: {

    }
}

</script>
