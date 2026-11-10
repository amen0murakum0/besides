---
---
var pdfFiles = {
{% assign talks = site.data.collection['浅谈'] %}
  "浅谈": [{% for f in site.static_files %}{% if f.path contains '/collection/浅谈/' and f.extname == '.pdf' %}{% assign author = talks[f.name] %}{"file":{{ f.name | jsonify }},"author":{{ author | default: '' | jsonify }}},{% endif %}{% endfor %}],
{% assign essays = site.data.collection['随笔'] %}
  "随笔": [{% for f in site.static_files %}{% if f.path contains '/collection/随笔/' and f.extname == '.pdf' %}{% assign author = essays[f.name] %}{"file":{{ f.name | jsonify }},"author":{{ author | default: '' | jsonify }}},{% endif %}{% endfor %}],
{% assign serials = site.data.collection['连载'] %}
  "连载": [{% for f in site.static_files %}{% if f.path contains '/collection/连载/' and f.extname == '.pdf' %}{% assign author = serials[f.name] %}{"file":{{ f.name | jsonify }},"author":{{ author | default: '' | jsonify }}},{% endif %}{% endfor %}]
};
