---
title: new page
date: 2017-07-11 12:08:00 Z
includes: header
layout: default
---

<!DOCTYPE html>
<html>

  {% include head.html %}

  <body>

    {% include header.html %}

    <div class="page-content">
      <div class="wrapper">
        {{ content }}
      </div>
    </div>

    {% include footer.html %}

  </body>

</html>