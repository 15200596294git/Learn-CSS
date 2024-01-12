```html
<style>
  .cont {
    line-height: 200px;
  }
  .cont p {
    display: inline-block;
    line-height: normal;
    vertical-align: middle;
  }
</style>
<div class="cont">
  <!-- 不明白在把p换成span时,好像是出现了两个struct,然后父级的line-height应用到了这两个struct上,高度翻倍 -->
  <p>
    测试数据...测试数据...测试数据...测试数据...测试数据...
    测试数据...测试数据...测试数据...测试数据...测试数据...
    测试数据...测试数据...测试数据...测试数据...测试数据...
    测试数据...测试数据...测试数据...测试数据...
  </p>
</div>
```