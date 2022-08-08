---
title: "Classement JF-17"
description: ""
lead: "Classement JF-17"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "resultats-docs"
weight: 50
toc: true
---

<div class="table-responsive">
<table
  id="table"
  data-toggle="table"
  data-search="true"
  data-data-type="text"
  data-pagination="true"
  data-page-size="25"
  data-response-handler="responseHandler"
  data-url="/data/elodf_1v1_classement_JF17_elo.json">
  <thead>
    <tr>
      <th data-field="Classement" data-sortable="true">Classement</th>
      <th data-field="Player">Pilote</th>
      <th data-field="ELO" data-sortable="true">ELO</th>
      <th data-field="Combats" data-sortable="true">Combats</th>
      <th data-field="Kill ratio" data-sortable="true">Kill ratio</th>
      <th data-field="LVL" data-sortable="true">Niveau</th>
    </tr>
  </thead>
</table>
</div>

<script>
  function responseHandler(res) {
    return JSON.parse(res)
  }
</script>
<link rel="stylesheet" href="https://unpkg.com/bootstrap-table@1.20.1/dist/bootstrap-table.min.css">
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>
<script src="https://unpkg.com/bootstrap-table@1.20.1/dist/bootstrap-table.min.js"></script>