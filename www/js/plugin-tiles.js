/* Domoticz Hardware Plugin Tiles v6 - globally loaded, theme independent, settings in a modal */
(function ($, window, document) {
  'use strict';

  if (window.__dzPluginTilesLoaded) {
    return;
  }
  window.__dzPluginTilesLoaded = true;

  function injectStyles() {
    if (document.getElementById('dz-plugin-tiles-style')) {
      return;
    }
    var style = document.createElement('style');
    style.id = 'dz-plugin-tiles-style';
    style.type = 'text/css';
    style.textContent = `#hardwarecontent #hardwaretable,
#hardwarecontent #hardwaretable_wrapper {
    display:none !important;
}
#hardwarecontent {
    --dzpt-accent: #2daad2;
    --dzpt-border: rgba(127,127,127,.34);
    --dzpt-border-soft: rgba(127,127,127,.22);
    --dzpt-surface: rgba(127,127,127,.08);
    --dzpt-surface-hover: rgba(127,127,127,.14);
    --dzpt-surface-selected: rgba(45,170,210,.15);
    --dzpt-panel: rgba(127,127,127,.04);
    --dzpt-text: inherit;
    --dzpt-muted-opacity: .68;
}
#hardwarecontent .dz-plugin-manager {
    display:block !important; margin:14px 0 18px !important; padding:16px !important;
    color:var(--dzpt-text) !important; border:1px solid var(--dzpt-border-soft) !important;
    border-radius:10px !important; background:var(--dzpt-surface) !important;
    background-image:none !important; box-sizing:border-box !important;
}
#hardwarecontent .dz-plugin-addbar {
    display:flex !important; align-items:center !important; gap:18px !important;
    padding:0 0 16px !important; margin:0 0 16px !important;
    border-bottom:1px solid var(--dzpt-border-soft) !important;
}
#hardwarecontent .dz-plugin-addbar-label {
    flex:0 0 auto !important; min-width:92px !important; color:var(--dzpt-text) !important;
    font-size:16px !important; font-weight:600 !important;
}
#hardwarecontent .dz-plugin-addbar-controls {
    display:flex !important; align-items:center !important; gap:8px !important;
    flex:1 1 auto !important; min-width:0 !important;
}
#hardwarecontent .dz-plugin-add-select {
    width:min(520px,100%) !important; min-width:220px !important; height:34px !important;
    box-sizing:border-box !important;
}
#hardwarecontent .dz-plugin-add-button { min-width:74px !important; min-height:34px !important; margin:0 !important; }
#hardwarecontent .dz-plugin-section-heading {
    display:flex !important; align-items:baseline !important; gap:12px !important;
    flex-wrap:wrap !important; margin:0 0 12px !important; color:var(--dzpt-text) !important;
}
#hardwarecontent .dz-plugin-section-heading h2 {
    margin:0 !important; color:var(--dzpt-text) !important; font-size:18px !important;
    line-height:1.3 !important; background:none !important; border:0 !important;
}
#hardwarecontent .dz-plugin-section-heading span {
    color:var(--dzpt-text) !important; opacity:var(--dzpt-muted-opacity) !important; font-size:12px !important;
}
#hardwarecontent .dz-plugin-grid {
    display:grid !important; grid-template-columns:repeat(auto-fill,minmax(220px,1fr)) !important;
    gap:12px !important; width:100% !important; float:none !important; clear:both !important;
}
#hardwarecontent .dz-plugin-grid > .dz-plugin-tile {
    position:relative !important;
    display:grid !important; grid-template-columns:48px minmax(0,1fr) !important;
    grid-template-rows:auto auto auto !important; column-gap:12px !important; row-gap:8px !important;
    width:100% !important; min-width:0 !important; max-width:none !important; min-height:142px !important;
    height:auto !important; margin:0 !important; padding:14px !important; overflow:hidden !important;
    text-align:left !important; color:var(--dzpt-text) !important; font:inherit !important;
    line-height:normal !important; text-shadow:none !important; text-transform:none !important;
    letter-spacing:normal !important; border:1px solid var(--dzpt-border) !important;
    border-radius:10px !important; background:var(--dzpt-surface) !important;
    background-image:none !important; box-shadow:none !important; box-sizing:border-box !important;
    cursor:pointer !important; opacity:1 !important; transform:none;
    transition:border-color 120ms ease,background-color 120ms ease,transform 120ms ease,box-shadow 120ms ease !important;
}
#hardwarecontent .dz-plugin-grid > .dz-plugin-tile:hover {
    color:var(--dzpt-text) !important; border-color:var(--dzpt-accent) !important;
    background:var(--dzpt-surface-hover) !important; background-image:none !important;
    transform:translateY(-1px) !important;
}
#hardwarecontent .dz-plugin-grid > .dz-plugin-tile:focus-within {
    color:var(--dzpt-text) !important; outline:2px solid var(--dzpt-accent) !important;
    outline-offset:2px !important;
}
#hardwarecontent .dz-plugin-grid > .dz-plugin-tile.is-selected {
    color:var(--dzpt-text) !important; border-color:var(--dzpt-accent) !important;
    background:var(--dzpt-surface-selected) !important; background-image:none !important;
    box-shadow:0 0 0 1px rgba(45,170,210,.28) inset !important;
}
#hardwarecontent .dz-plugin-tile-open {
    -webkit-appearance:none !important; appearance:none !important; position:absolute !important;
    inset:0 !important; z-index:1 !important; width:100% !important; height:100% !important;
    margin:0 !important; padding:0 !important; color:transparent !important;
    border:0 !important; border-radius:10px !important; background:transparent !important;
    box-shadow:none !important; cursor:pointer !important;
}
#hardwarecontent .dz-plugin-tile-open:focus,
#hardwarecontent .dz-plugin-tile-open:focus-visible { outline:0 !important; }
#hardwarecontent .dz-plugin-tile-icon {
    -webkit-appearance:none !important; appearance:none !important;
    grid-column:1 !important; grid-row:1 !important; display:inline-flex !important;
    align-items:center !important; justify-content:center !important; width:46px !important;
    height:46px !important; color:var(--dzpt-accent) !important;
    border:1px solid var(--dzpt-border-soft) !important; border-radius:9px !important;
    background:var(--dzpt-surface) !important; background-image:none !important;
    margin:0 !important; padding:0 !important; font-size:22px !important;
    line-height:1 !important; box-shadow:none !important; cursor:pointer !important;
    box-sizing:border-box !important; position:relative !important; z-index:2 !important;
    transition:color 120ms ease,border-color 120ms ease,background-color 120ms ease,transform 120ms ease !important;
}
#hardwarecontent .dz-plugin-tile-icon.is-enabled { color:#2fa866 !important; border-color:rgba(47,168,102,.58) !important; background:rgba(47,168,102,.12) !important; }
#hardwarecontent .dz-plugin-tile-icon.is-disabled { color:#8a8f96 !important; }
#hardwarecontent .dz-plugin-tile-icon:hover { border-color:var(--dzpt-accent) !important; transform:scale(1.04) !important; }
#hardwarecontent .dz-plugin-tile-icon:focus,
#hardwarecontent .dz-plugin-tile-icon:focus-visible { outline:2px solid var(--dzpt-accent) !important; outline-offset:2px !important; }
#hardwarecontent .dz-plugin-tile.is-updating { opacity:.62 !important; pointer-events:none !important; }
#hardwarecontent .dz-plugin-tile-text {
    grid-column:2 !important; grid-row:1 !important; display:flex !important;
    flex-direction:column !important; min-width:0 !important; align-self:center !important;
    color:var(--dzpt-text) !important;
}
#hardwarecontent .dz-plugin-tile-type,#hardwarecontent .dz-plugin-tile-name {
    display:block !important; color:var(--dzpt-text) !important; overflow:hidden !important;
    text-overflow:ellipsis !important; white-space:nowrap !important;
}
#hardwarecontent .dz-plugin-tile-type { font-size:15px !important; font-weight:600 !important; line-height:1.25 !important; }
#hardwarecontent .dz-plugin-tile-name { margin-top:4px !important; opacity:var(--dzpt-muted-opacity) !important; font-size:12px !important; }
#hardwarecontent .dz-plugin-tile-network {
    grid-column:1 / span 2 !important; grid-row:2 !important; display:grid !important;
    grid-template-columns:minmax(0,1fr) auto !important; gap:10px !important; min-width:0 !important;
    padding:7px 9px !important; color:var(--dzpt-text) !important;
    border:1px solid var(--dzpt-border-soft) !important; border-radius:7px !important;
    background:var(--dzpt-panel) !important; font-size:11px !important; opacity:.82 !important;
    box-sizing:border-box !important;
}
#hardwarecontent .dz-plugin-tile-network span {
    min-width:0 !important; overflow:hidden !important; text-overflow:ellipsis !important; white-space:nowrap !important;
}
#hardwarecontent .dz-plugin-tile-network strong { font-weight:600 !important; opacity:.9 !important; }
#hardwarecontent .dz-plugin-tile-version-row {
    grid-column:1 / span 2 !important; grid-row:3 !important; display:inline-flex !important;
    align-items:center !important; width:fit-content !important;
    color:var(--dzpt-text) !important; font-size:11px !important; opacity:.86 !important;
}
#hardwarecontent .dz-plugin-tile-idx {
    position:absolute !important; right:10px !important; bottom:9px !important;
    color:var(--dzpt-text) !important; font-size:10px !important; opacity:.46 !important;
}
#hardwarecontent .dz-plugin-empty {
    padding:20px !important; color:var(--dzpt-text) !important;
    border:1px dashed var(--dzpt-border) !important; border-radius:8px !important;
    background:var(--dzpt-surface) !important; text-align:center !important; opacity:.78 !important;
}
#hardwarecontent .dz-plugin-settings-header {
    display:block; margin:18px 0 0 !important; padding:13px 16px !important;
    color:var(--dzpt-text) !important; border:1px solid var(--dzpt-border-soft) !important;
    border-bottom:0 !important; border-radius:9px 9px 0 0 !important;
    background:var(--dzpt-surface) !important; background-image:none !important;
}
#hardwarecontent .dz-plugin-settings-title {
    margin:0 !important; color:var(--dzpt-text) !important; font-size:18px !important;
    line-height:1.3 !important; background:none !important; border:0 !important;
}
#hardwarecontent .dz-plugin-settings-subtitle { margin-top:4px !important; color:var(--dzpt-text) !important; font-size:12px !important; opacity:var(--dzpt-muted-opacity) !important; }
#hardwarecontent .dz-plugin-settings-header + .dz-hardware-settings-panel {
    margin-top:0 !important; padding:12px 16px 14px !important; color:var(--dzpt-text) !important;
    border:1px solid var(--dzpt-border-soft) !important; border-top:0 !important;
    border-radius:0 0 9px 9px !important; background:var(--dzpt-panel) !important;
    box-sizing:border-box !important; font-size:12px !important;
}
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table {
    display:block !important; width:100% !important; border-collapse:collapse !important;
}
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody {
    display:flex !important; flex-wrap:wrap !important; align-items:flex-start !important;
    column-gap:20px !important; row-gap:0 !important; width:100% !important;
}
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr {
    box-sizing:border-box !important;
}
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr.dz-field-pair-row {
    display:flex !important; align-items:center !important;
    flex:0 0 calc(50% - 10px) !important; max-width:calc(50% - 10px) !important; min-width:220px !important;
}
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr.dz-field-full-row {
    display:block !important; flex:0 0 100% !important; max-width:100% !important;
}
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr.dz-field-full-row > td {
    display:block !important; width:100% !important;
}
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr > td,
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr > th {
    padding:4px 8px !important; border:0 !important; font-size:12px !important; line-height:1.3 !important;
    box-sizing:border-box !important;
}
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr.dz-field-pair-row > td:first-child,
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr.dz-field-pair-row > th:first-child {
    flex:0 0 110px !important; width:110px !important; font-weight:600 !important; text-align:right !important;
}
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr.dz-field-pair-row > td:last-child {
    flex:1 1 auto !important; min-width:0 !important;
}
#hardwarecontent .dz-hardware-settings-panel input[type="text"],
#hardwarecontent .dz-hardware-settings-panel input[type="password"],
#hardwarecontent .dz-hardware-settings-panel input[type="number"],
#hardwarecontent .dz-hardware-settings-panel select {
    height:26px !important; padding:2px 6px !important; font-size:12px !important; line-height:1.2 !important;
}
#hardwarecontent .dz-hardware-settings-panel #divpythonplugin h1,
#hardwarecontent .dz-hardware-settings-panel #divpythonplugin h2,
#hardwarecontent .dz-hardware-settings-panel #divpythonplugin h3,
#hardwarecontent .dz-hardware-settings-panel #divpythonplugin h4 {
    margin:8px 0 4px !important; font-size:12.5px !important; font-weight:600 !important;
}
#hardwarecontent .dz-hardware-settings-panel #divpythonplugin p {
    margin:4px 0 !important; font-size:12px !important; line-height:1.35 !important;
}
#hardwarecontent .dz-hardware-settings-panel #divpythonplugin ul,
#hardwarecontent .dz-hardware-settings-panel #divpythonplugin ol {
    margin:4px 0 4px 18px !important; padding:0 !important; font-size:12px !important;
}
#hardwarecontent .dz-hardware-settings-panel #divpythonplugin li {
    margin:1px 0 !important;
}
#hardwarecontent .dz-hardware-settings-panel tr.dz-plugin-hidden-row,
#hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr.dz-plugin-hidden-row { display:none !important; }
html.dz-plugin-modal-open, html.dz-plugin-modal-open body { overflow:hidden !important; }
html.dz-plugin-modal-open #notification { z-index:1045 !important; }
#hardwarecontent .dz-plugin-modal {
    position:fixed !important; inset:0 !important; z-index:1035 !important;
    display:none; align-items:flex-start !important; justify-content:center !important;
    padding:24px 16px !important; background:rgba(0,0,0,.55) !important;
    box-sizing:border-box !important; overflow:hidden !important;
}
#hardwarecontent .dz-plugin-modal.is-open { display:flex !important; }
#hardwarecontent .dz-plugin-modal-dialog {
    position:relative !important; display:flex !important; flex-direction:column !important;
    width:min(980px,100%) !important; max-height:calc(100vh - 48px) !important; margin:0 !important;
    color:var(--dzpt-text) !important; border:1px solid var(--dzpt-border) !important;
    border-radius:12px !important; background:var(--dzpt-modal-bg,#202020) !important;
    background-image:none !important; box-shadow:0 18px 48px rgba(0,0,0,.45) !important;
    box-sizing:border-box !important; overflow:hidden !important;
}
#hardwarecontent .dz-plugin-modal-dialog:focus { outline:0 !important; }
#hardwarecontent .dz-plugin-modal .dz-plugin-settings-header {
    flex:0 0 auto !important; margin:0 !important; padding:14px 56px 12px 18px !important;
    border:0 !important; border-bottom:1px solid var(--dzpt-border-soft) !important;
    border-radius:0 !important; background:var(--dzpt-surface) !important;
}
#hardwarecontent .dz-plugin-modal .dz-plugin-settings-header + .dz-hardware-settings-panel {
    flex:1 1 auto !important; min-height:0 !important; margin:0 !important;
    padding:12px 18px 0 !important; border:0 !important; border-radius:0 !important;
    background:transparent !important; overflow-y:auto !important; overflow-x:hidden !important;
}
#hardwarecontent .dz-plugin-modal #updelclr {
    position:sticky !important; bottom:0 !important; z-index:3 !important;
    width:calc(100% + 36px) !important; margin:8px -18px 0 !important;
    border-top:1px solid var(--dzpt-border-soft) !important;
    background:var(--dzpt-modal-bg,#202020) !important;
}
#hardwarecontent .dz-plugin-modal-close {
    -webkit-appearance:none !important; appearance:none !important;
    position:absolute !important; top:10px !important; right:10px !important; z-index:4 !important;
    display:inline-flex !important; align-items:center !important; justify-content:center !important;
    width:34px !important; height:34px !important; margin:0 !important; padding:0 !important;
    color:var(--dzpt-text) !important; border:1px solid var(--dzpt-border-soft) !important;
    border-radius:8px !important; background:var(--dzpt-surface) !important; background-image:none !important;
    font-size:22px !important; line-height:1 !important; box-shadow:none !important; cursor:pointer !important;
}
#hardwarecontent .dz-plugin-modal-close:hover { border-color:var(--dzpt-accent) !important; background:var(--dzpt-surface-hover) !important; }
#hardwarecontent .dz-plugin-modal-close:focus-visible { outline:2px solid var(--dzpt-accent) !important; outline-offset:2px !important; }
@media (max-width:900px) {
    #hardwarecontent .dz-hardware-settings-panel table.dz-flex-table > tbody > tr.dz-field-pair-row {
        flex:0 0 100% !important; max-width:100% !important;
    }
}
@media (max-width:760px) {
    #hardwarecontent .dz-plugin-addbar { align-items:stretch !important; flex-direction:column !important; gap:8px !important; }
    #hardwarecontent .dz-plugin-addbar-controls { align-items:stretch !important; flex-direction:column !important; }
    #hardwarecontent .dz-plugin-add-select,#hardwarecontent .dz-plugin-add-button { width:100% !important; max-width:none !important; }
    #hardwarecontent .dz-plugin-grid { grid-template-columns:1fr !important; }
    #hardwarecontent .dz-plugin-modal { padding:8px !important; }
    #hardwarecontent .dz-plugin-modal-dialog { max-height:calc(100vh - 16px) !important; }
}`;
    document.head.appendChild(style);
  }

  function parseRgb(value) {
    var match = String(value || '').match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    return match ? [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3], 10)] : null;
  }

  function findBackground(element) {
    var node = element;
    while (node && node !== document.documentElement) {
      var color = window.getComputedStyle(node).backgroundColor;
      if (color && color !== 'transparent' && color !== 'rgba(0, 0, 0, 0)') {
        return color;
      }
      node = node.parentElement;
    }
    return window.getComputedStyle(document.body).backgroundColor || 'rgb(32,32,32)';
  }

  function applyThemePalette() {
    var root = document.getElementById('hardwarecontent');
    if (!root) {
      return;
    }
    var rgb = parseRgb(findBackground(root)) || [32, 32, 32];
    var luminance = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255;
    var isLight = luminance > 0.58;
    var computed = window.getComputedStyle(root);
    var textColor = computed.color || (isLight ? '#222' : '#eee');
    root.style.setProperty('--dzpt-text', textColor);
    root.style.setProperty('--dzpt-border', isLight ? 'rgba(0,0,0,.22)' : 'rgba(255,255,255,.20)');
    root.style.setProperty('--dzpt-border-soft', isLight ? 'rgba(0,0,0,.13)' : 'rgba(255,255,255,.12)');
    root.style.setProperty('--dzpt-surface', isLight ? 'rgba(0,0,0,.035)' : 'rgba(255,255,255,.045)');
    root.style.setProperty('--dzpt-surface-hover', isLight ? 'rgba(0,0,0,.075)' : 'rgba(255,255,255,.085)');
    root.style.setProperty('--dzpt-surface-selected', isLight ? 'rgba(45,170,210,.14)' : 'rgba(45,170,210,.18)');
    root.style.setProperty('--dzpt-panel', isLight ? 'rgba(0,0,0,.018)' : 'rgba(255,255,255,.018)');
    root.style.setProperty('--dzpt-modal-bg', 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')');
  }

  injectStyles();

  var managerId = 'dz-plugin-manager';
  var settingsHeaderId = 'dz-plugin-settings-header';
  var modalId = 'dz-plugin-settings-modal';
  var modalReturnFocus = null;
  var suppressModalClose = false;
  var activePluginIdx = null;
  var availableHardware = [];
  var availableHardwareLoaded = false;
  var availableHardwareLoading = false;
  var pluginDefaults = {};
  var toggleRequests = {};
  var renderTimer = null;
  var setupTimer = null;

  function t(key, fallback) {
    if (typeof $.t === 'function') {
      var translated = $.t(key);
      if (translated && translated !== key) {
        return translated;
      }
    }
    return fallback || key;
  }

  function escapeRegex(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function getHardwareRoot() {
    return $('#hardwarecontent');
  }

  function getTypeSelect() {
    return getHardwareRoot().find('#hardwareparamstable #combotype').first();
  }

  function getNameInput() {
    return getHardwareRoot().find('#hardwareparamstable #hardwarename').first();
  }

  function getTypeRow() {
    return getTypeSelect().closest('tr');
  }

  function getAddAction() {
    return getHardwareRoot().find('#updelclr a[onclick*="AddHardware"]').first();
  }

  function getUpdateAction() {
    return getHardwareRoot().find('#updelclr #hardwareupdate').first();
  }

  function getDeleteAction() {
    return getHardwareRoot().find('#updelclr #hardwaredelete').first();
  }

  function getPluginRoot(pluginKey) {
    var $result = $();
    getHardwareRoot().find('#divpythonplugin [id]').each(function () {
      if (String(this.id) === String(pluginKey)) {
        $result = $(this);
        return false;
      }
    });
    return $result;
  }

  function getPluginDisplayName(pluginKey, fallback) {
    var result = '';

    availableHardware.some(function (plugin) {
      if (String(plugin.key) === String(pluginKey)) {
        result = plugin.name;
        return true;
      }
      return false;
    });

    if (result) {
      return result;
    }

    getTypeSelect().find('option').each(function () {
      if (String($(this).val()) === String(pluginKey)) {
        result = $.trim($(this).text());
        return false;
      }
    });
    return result || fallback || String(pluginKey || 'Plugin');
  }

  function getPluginVersion(pluginKey) {
    var result = '';

    availableHardware.some(function (plugin) {
      if (String(plugin.key) === String(pluginKey)) {
        result = plugin.version || '';
        return true;
      }
      return false;
    });

    if (result) {
      return result;
    }

    return getPluginVersionFromDom(pluginKey);
  }

  function getPluginVersionFromDom(pluginKey) {
    var $root = getPluginRoot(pluginKey);
    if (!$root.length) {
      return '';
    }

    var match = $root.text().match(/version\s*[:\-]?\s*(v?\d+(?:\.\d+){1,3})/i);
    return match ? match[1].replace(/^v/i, '') : '';
  }

  function getAvailableHardwareFromPage() {
    var catalog = [];
    var seen = {};

    getTypeSelect().find('option').each(function () {
      var key = String($(this).val() || '');
      if (!key || seen[key]) {
        return;
      }

      seen[key] = true;
      catalog.push({
        key: key,
        name: $.trim($(this).text()) || key
      });
    });

    return catalog.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });
  }

  function loadAvailableHardware() {
    if (availableHardwareLoaded || availableHardwareLoading) {
      return;
    }

    availableHardwareLoading = true;
    $.ajax({
      url: 'json.htm?type=command&param=gethardwaretypes',
      dataType: 'json',
      cache: false,
      success: function (data) {
        var seen = {};
        var catalog = getAvailableHardwareFromPage();
        var versionByKey = {};

        catalog.forEach(function (item) {
          seen[String(item.key)] = true;
        });

        if (data && data.result) {
          data.result.forEach(function (item) {
            // Standard Domoticz hardware comes from #combotype, which already
            // applies Domoticz' platform filters and I2C grouping. Add every
            // discovered Python plugin from the API as a completeness fallback.
            if (String(item.idx) !== '94' || !item.key) {
              return;
            }

            var key = String(item.key);
            var version = item.Version || item.version || item.PluginVersion || '';
            if (version) {
              versionByKey[key] = String(version);
            }

            if (seen[key]) {
              return;
            }

            seen[key] = true;
            catalog.push({
              key: key,
              name: $.trim(item.name || key)
            });
          });
        }

        catalog.forEach(function (item) {
          if (versionByKey[item.key]) {
            item.version = versionByKey[item.key];
          }
        });

        availableHardware = catalog.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
        availableHardwareLoaded = true;
        populatePluginAddSelect();
        scheduleRender(0);
      },
      complete: function () {
        availableHardwareLoading = false;
      }
    });
  }

  function tagSettingsFieldRows() {
    var $panel = getHardwareRoot().find('.dz-hardware-settings-panel');
    if (!$panel.length) {
      return;
    }

    // Only the standard params table and the currently VISIBLE plugin-type
    // block may be restyled. Every other plugin-type block stays untouched
    // (Domoticz hides inactive ones via its own display:none), otherwise a
    // blanket selector risks overriding that and showing every plugin at once.
    $panel.find('table.dz-flex-table').removeClass('dz-flex-table');
    $panel.find('tr.dz-field-pair-row, tr.dz-field-full-row').removeClass('dz-field-pair-row dz-field-full-row');

    var $tables = $panel.find('#hardwareparamstable');

    var $activeBlock = $panel.find('#divpythonplugin .plugin[id]').filter(function () {
      return $(this).is(':visible');
    }).first();

    if ($activeBlock.length) {
      $tables = $tables.add($activeBlock.is('table') ? $activeBlock : $activeBlock.find('table'));
    }

    $tables.addClass('dz-flex-table').each(function () {
      $(this).find('> tbody > tr').each(function () {
        var $tr = $(this);
        if ($tr.find('input, select, textarea').length) {
          $tr.addClass('dz-field-pair-row');
        } else {
          $tr.addClass('dz-field-full-row');
        }
      });
    });
  }

  function reorderStandardFields() {
    var $nameRow = getNameInput().closest('tr');
    if (!$nameRow.length) {
      return;
    }

    var $logLevelRow = getHardwareRoot()
      .find('#hardwareparamstable > tbody > tr')
      .filter(function () {
        return /log\s*level/i.test($(this).find('td, th').first().text());
      })
      .first();

    if ($logLevelRow.length && !$logLevelRow.is($nameRow)) {
      $logLevelRow.insertBefore($nameRow);
    }
  }

  function capturePluginDefaults() {
    pluginDefaults = {};
    getHardwareRoot().find('#divpythonplugin .plugin[id]').each(function () {
      var key = this.id;
      var fields = [];
      $(this).find('input, select, textarea').each(function () {
        var $field = $(this);
        if (!this.id) {
          return;
        }
        fields.push({
          id: this.id,
          type: ($field.attr('type') || this.tagName || '').toLowerCase(),
          value: $field.val(),
          checked: $field.is(':checkbox') ? $field.prop('checked') : null,
          selectedIndex: this.tagName.toLowerCase() === 'select' ? this.selectedIndex : null
        });
      });
      pluginDefaults[key] = fields;
    });
  }

  function restorePluginDefaults(pluginKey) {
    var $root = getPluginRoot(pluginKey);
    var fields = pluginDefaults[pluginKey] || [];

    fields.forEach(function (saved) {
      var $field = $root.find('[id]').filter(function () {
        return String(this.id) === String(saved.id);
      }).first();
      if (!$field.length) {
        return;
      }
      if ($field.is(':checkbox')) {
        $field.prop('checked', !!saved.checked);
      } else if ($field.is('select')) {
        if (saved.selectedIndex !== null && saved.selectedIndex >= 0) {
          $field.prop('selectedIndex', saved.selectedIndex);
        } else {
          $field.val(saved.value);
        }
      } else {
        $field.val(saved.value);
      }
      $field.removeAttr('data-haspwd placeholder');
    });

    $root.find('select, input').trigger('change');
  }

  function populatePluginAddSelect() {
    var $managerSelect = $('#' + managerId + ' .dz-plugin-add-select');
    if (!$managerSelect.length) {
      return;
    }

    var previous = $managerSelect.val();
    $managerSelect.empty();
    $('<option>', {
      value: '',
      text: t('Select plugin', 'Select plugin to add...')
    }).appendTo($managerSelect);

    var availableTypes = availableHardwareLoaded ? availableHardware : getAvailableHardwareFromPage();
    availableTypes.forEach(function (plugin) {
      $('<option>', {
        value: plugin.key,
        text: plugin.name
      }).appendTo($managerSelect);
    });

    if (previous && $managerSelect.find('option').filter(function () {
      return String($(this).val()) === String(previous);
    }).length) {
      $managerSelect.val(previous);
    }

    $managerSelect.prop('disabled', availableTypes.length === 0);
    $('#' + managerId + ' .dz-plugin-add-button').prop('disabled', availableTypes.length === 0);

    loadAvailableHardware();
  }

  function setSettingsHeader(title, subtitle, mode) {
    var $header = $('#' + settingsHeaderId);
    if (!$header.length) {
      return;
    }
    $header.removeClass('is-new is-edit is-hardware')
      .addClass(mode ? 'is-' + mode : '')
      .show();
    $header.find('.dz-plugin-settings-title').text(title || '');
    $header.find('.dz-plugin-settings-subtitle').text(subtitle || '').toggle(!!subtitle);
  }

  function restoreDefaultActions() {
    getTypeRow().removeClass('dz-plugin-hidden-row');
    getAddAction().show().attr('data-i18n', 'Add').text(t('Add', 'Add'));
    getUpdateAction().attr('data-i18n', 'Update').text(t('Update', 'Update'));
    getDeleteAction().attr('data-i18n', 'Delete').text(t('Delete', 'Delete'));
  }

  function setPluginEditActions() {
    getTypeRow().addClass('dz-plugin-hidden-row');
    getAddAction().hide();
    getUpdateAction().attr('data-i18n', 'Save').text(t('Save', 'Save'));
    getDeleteAction().attr('data-i18n', 'Delete').text(t('Delete', 'Delete'));
  }

  function setPluginAddActions() {
    getTypeRow().addClass('dz-plugin-hidden-row');
    getAddAction().show().removeAttr('data-i18n').text('Save new plugin');
    getUpdateAction().hide();
    getDeleteAction().hide();
  }

  function getModal() {
    return $('#' + modalId);
  }

  function isModalOpen() {
    return getModal().hasClass('is-open');
  }

  function isOtherDialogOpen() {
    // Domoticz' own confirmations (bootbox / bootstrap modal, jQuery UI dialogs)
    // sit on top of the settings modal; Esc and outside clicks belong to them.
    return $('.modal:visible, .bootbox:visible, .ui-dialog:visible').length > 0;
  }

  function openSettingsModal() {
    var $modal = getModal();
    if (!$modal.length) {
      return;
    }
    if (!isModalOpen()) {
      modalReturnFocus = document.activeElement;
    }
    $modal.addClass('is-open').attr('aria-hidden', 'false');
    $('html').addClass('dz-plugin-modal-open');
    tagSettingsFieldRows();
    $modal.find('.dz-hardware-settings-panel').scrollTop(0);
    $modal.find('.dz-plugin-modal-dialog').trigger('focus');
  }

  function closeSettingsModal() {
    var $modal = getModal();
    $('html').removeClass('dz-plugin-modal-open');
    if (!$modal.length || !isModalOpen()) {
      return;
    }
    $modal.removeClass('is-open').attr('aria-hidden', 'true');
    selectTile(null);

    var returnTo = modalReturnFocus;
    modalReturnFocus = null;
    if (returnTo && document.body.contains(returnTo) && typeof returnTo.focus === 'function') {
      returnTo.focus();
    }
  }

  function trapModalFocus(event) {
    var $focusable = getModal()
      .find('button, a[href], a[role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])')
      .filter(':visible:not(:disabled)');
    if (!$focusable.length) {
      return;
    }
    var first = $focusable.get(0);
    var last = $focusable.get($focusable.length - 1);
    if (event.shiftKey && (document.activeElement === first || !getModal()[0].contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function selectTile(idx) {
    activePluginIdx = idx === null || typeof idx === 'undefined' ? null : String(idx);
    $('#' + managerId + ' .dz-plugin-tile').each(function () {
      var selected = String($(this).attr('data-plugin-idx')) === activePluginIdx;
      $(this)
        .toggleClass('is-selected', selected)
        .find('.dz-plugin-tile-open')
        .attr('aria-pressed', selected ? 'true' : 'false');
    });
  }

  function isPluginEnabled(item) {
    return item.Enabled === true || String(item.Enabled).toLowerCase() === 'true' || String(item.Enabled) === '1';
  }

  function valueOrEmpty(value) {
    return value === null || typeof value === 'undefined' ? '' : value;
  }

  function updateTileEnabledState($tile, enabled) {
    var action = enabled ? 'Actief uitschakelen' : 'Actief inschakelen';
    $tile.find('.dz-plugin-tile-icon')
      .toggleClass('is-enabled', enabled)
      .toggleClass('is-disabled', !enabled)
      .attr('aria-pressed', enabled ? 'true' : 'false')
      .attr('aria-label', action)
      .attr('title', action);
  }

  function syncPluginEnabledCheckbox(idx, enabled) {
    if (String(idx) !== activePluginIdx) {
      return;
    }

    getHardwareRoot()
      .find('#hardwareparamstable input#enabled')
      .first()
      .prop('checked', !!enabled)
      .triggerHandler('change');
  }

  function togglePluginEnabled(item, $tile) {
    var idx = String(item.idx);
    if (toggleRequests[idx]) {
      return;
    }

    var enabled = isPluginEnabled(item);
    var nextEnabled = !enabled;
    var $toggle = $tile.find('.dz-plugin-tile-icon');

    toggleRequests[idx] = true;
    $tile.addClass('is-updating').attr('aria-busy', 'true');
    $toggle.prop('disabled', true);
    syncPluginEnabledCheckbox(idx, nextEnabled);

    $.ajax({
      url: 'json.htm',
      type: 'GET',
      dataType: 'json',
      cache: false,
      data: {
        type: 'command',
        param: 'updatehardware',
        htype: 94,
        loglevel: valueOrEmpty(item.LogLevel),
        idx: item.idx,
        name: valueOrEmpty(item.Name),
        username: valueOrEmpty(item.Username),
        password: valueOrEmpty(item.Password),
        address: valueOrEmpty(item.Address),
        port: valueOrEmpty(item.Port),
        serialport: valueOrEmpty(item.SerialPort),
        Mode1: valueOrEmpty(item.Mode1),
        Mode2: valueOrEmpty(item.Mode2),
        Mode3: valueOrEmpty(item.Mode3),
        Mode4: valueOrEmpty(item.Mode4),
        Mode5: valueOrEmpty(item.Mode5),
        Mode6: valueOrEmpty(item.Mode6),
        extra: valueOrEmpty(item.Extra),
        enabled: nextEnabled,
        datatimeout: valueOrEmpty(item.DataTimeout),
        settings: JSON.stringify(item.Settings || {})
      },
      success: function (data) {
        if (!data || data.status !== 'OK') {
          syncPluginEnabledCheckbox(idx, enabled);
          if (typeof ShowNotify === 'function') {
            ShowNotify('Actief Aan/Uit wijzigen is mislukt.', 2500, true);
          }
          return;
        }

        item.Enabled = nextEnabled ? 'true' : 'false';
        updateTileEnabledState($tile, nextEnabled);

        if (typeof window.RefreshHardwareTable === 'function') {
          suppressModalClose = true;
          try {
            window.RefreshHardwareTable();
          } finally {
            suppressModalClose = false;
          }
        } else {
          scheduleRender(0);
        }

        syncPluginEnabledCheckbox(idx, nextEnabled);
        window.setTimeout(function () {
          syncPluginEnabledCheckbox(idx, nextEnabled);
        }, 0);
        window.setTimeout(function () {
          syncPluginEnabledCheckbox(idx, nextEnabled);
        }, 150);
      },
      error: function () {
        syncPluginEnabledCheckbox(idx, enabled);
        if (typeof ShowNotify === 'function') {
          ShowNotify('Actief Aan/Uit wijzigen is mislukt.', 2500, true);
        }
      },
      complete: function () {
        delete toggleRequests[idx];
        $tile.removeClass('is-updating').removeAttr('aria-busy');
        $toggle.prop('disabled', false);
      }
    });
  }

  function findHardwareRow(idx, table) {
    var result = null;
    var nodes = table.fnGetNodes();
    for (var i = 0; i < nodes.length; i += 1) {
      var data = table.fnGetData(nodes[i]);
      if (data && String(data.DT_RowId) === String(idx)) {
        result = nodes[i];
        break;
      }
    }
    return result;
  }

  function selectHardwareRow(idx) {
    if (!$('#hardwaretable').length || !$.fn.dataTable) {
      return false;
    }

    var table = $('#hardwaretable').dataTable();
    var row = findHardwareRow(idx, table);

    if (row && $(row).hasClass('row_selected')) {
      $(row).removeClass('row_selected');
    }

    var settings = table.fnSettings();
    var colState = settings.aoPreSearchCols && settings.aoPreSearchCols[0]
      ? {
          search: settings.aoPreSearchCols[0].sSearch || '',
          regex: !!settings.aoPreSearchCols[0].bRegex,
          smart: settings.aoPreSearchCols[0].bSmart !== false
        }
      : { search: '', regex: false, smart: true };

    table.fnFilter('^' + escapeRegex(idx) + '$', 0, true, false);
    row = findHardwareRow(idx, table);

    if (row) {
      $(row).trigger('click');
    }

    table.fnFilter(colState.search, 0, colState.regex, colState.smart);
    return !!row;
  }

  function showPluginSettings(item, typeName, openModal) {
    if (!selectHardwareRow(item.idx)) {
      return false;
    }

    var displayName = item.Name || typeName;
    selectTile(item.idx);
    setPluginEditActions();
    setSettingsHeader(
      'Settings: ' + displayName,
      typeName !== displayName ? typeName : '',
      'edit'
    );
    tagSettingsFieldRows();

    if (openModal) {
      openSettingsModal();
    }

    return true;
  }

  function preparePluginAdd(pluginKey) {
    if (!pluginKey) {
      if (typeof ShowNotify === 'function') {
        ShowNotify('Please select a plugin first.', 2500, true);
      }
      return;
    }

    var pluginName = getPluginDisplayName(pluginKey, pluginKey);
    selectTile(null);

    if ($('#hardwaretable').length && $.fn.dataTable) {
      $('#hardwaretable').dataTable().$('tr.row_selected').removeClass('row_selected');
    }

    if (typeof EnableUpdateAndDeleteButtons === 'function') {
      EnableUpdateAndDeleteButtons(false);
    }

    var $type = getTypeSelect();
    $type.val(pluginKey).trigger('change');
    restorePluginDefaults(pluginKey);
    tagSettingsFieldRows();

    getNameInput().val(pluginName);
    getHardwareRoot().find('#hardwareparamstable #enabled').prop('checked', true);

    setPluginAddActions();
    setSettingsHeader(
      'New plugin: ' + pluginName,
      'Complete the settings below and save the new plugin.',
      'new'
    );

    openSettingsModal();
  }

  function createManager() {
    if ($('#' + managerId).length) {
      return true;
    }

    var $root = getHardwareRoot();
    applyThemePalette();
    var $table = $root.find('#hardwaretable');
    var $type = getTypeSelect();
    var $settings = $root.find('.page-content-container').first();

    if (!$table.length || !$type.length || !$type.find('option').length || !$settings.length) {
      return false;
    }

    var $tableWrapper = $root.find('#hardwaretable_wrapper');
    if (!$tableWrapper.length) {
      return false;
    }

    var $manager = $('<section>', {
      id: managerId,
      'class': 'dz-plugin-manager',
      'aria-label': 'Python plugins'
    });

    var $addBar = $('<div>', { 'class': 'dz-plugin-addbar' });
    $('<div>', { 'class': 'dz-plugin-addbar-label', text: 'Add plugin' }).appendTo($addBar);

    var $controls = $('<div>', { 'class': 'dz-plugin-addbar-controls' }).appendTo($addBar);
    $('<select>', {
      'class': 'dz-plugin-add-select combobox ui-corner-all',
      'aria-label': 'Select plugin to add'
    }).appendTo($controls);
    $('<button>', {
      type: 'button',
      'class': 'btn btn-info dz-plugin-add-button',
      text: t('Add', 'Add')
    }).appendTo($controls);
    var $installedHeader = $('<div>', { 'class': 'dz-plugin-section-heading' }).appendTo($manager);
    $('<h2>', { text: 'Installed plugins' }).appendTo($installedHeader);
    $('<span>', { text: 'Click a tile to open its settings.' }).appendTo($installedHeader);
    $('<div>', { 'class': 'dz-plugin-grid', role: 'list' }).appendTo($manager);
    $addBar.prependTo($manager);

    var $pageHeader = $root.find('> .page-header-small').first();
    if ($pageHeader.length) {
      $manager.insertAfter($pageHeader);
    } else {
      $manager.prependTo($root);
    }

    var $settingsHeader = $('<div>', {
      id: settingsHeaderId,
      'class': 'dz-plugin-settings-header'
    }).hide();
    $('<h2>', { 'class': 'dz-plugin-settings-title' }).appendTo($settingsHeader);
    $('<div>', { 'class': 'dz-plugin-settings-subtitle' }).appendTo($settingsHeader);

    // The settings panel (incl. Domoticz' own #updelclr buttons) lives in a
    // modal overlay. It stays inside #hardwarecontent so Domoticz' selectors
    // ('#hardwarecontent #...') and the styles above keep working.
    var $modal = $('<div>', {
      id: modalId,
      'class': 'dz-plugin-modal',
      'aria-hidden': 'true'
    });
    var $dialog = $('<div>', {
      'class': 'dz-plugin-modal-dialog',
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': settingsHeaderId + '-title',
      tabindex: '-1'
    }).appendTo($modal);
    $('<button>', {
      type: 'button',
      'class': 'dz-plugin-modal-close',
      'aria-label': t('Close', 'Close'),
      title: t('Close', 'Close'),
      html: '&times;'
    }).appendTo($dialog);
    $settingsHeader.find('.dz-plugin-settings-title').attr('id', settingsHeaderId + '-title');
    $settingsHeader.appendTo($dialog);
    $settings.appendTo($dialog).addClass('dz-hardware-settings-panel');
    $modal.insertAfter($manager);

    var pointerStartedOnBackdrop = false;
    $modal
      .on('mousedown.dzPluginTiles', function (event) {
        pointerStartedOnBackdrop = event.target === this;
      })
      .on('click.dzPluginTiles', function (event) {
        if (event.target === this && pointerStartedOnBackdrop && !isOtherDialogOpen()) {
          closeSettingsModal();
        }
        pointerStartedOnBackdrop = false;
      })
      .on('click.dzPluginTiles', '.dz-plugin-modal-close', function () {
        closeSettingsModal();
      })
      .on('keydown.dzPluginTiles', function (event) {
        if (event.key === 'Tab' && !isOtherDialogOpen()) {
          trapModalFocus(event);
        }
      });

    $tableWrapper.hide();

    reorderStandardFields();
    tagSettingsFieldRows();
    capturePluginDefaults();
    populatePluginAddSelect();

    $('#' + managerId + ' .dz-plugin-add-button')
      .off('click.dzPluginTiles')
      .on('click.dzPluginTiles', function () {
        preparePluginAdd($('#' + managerId + ' .dz-plugin-add-select').val());
      });

    $root.find('#hardwaretable tbody')
      .off('click.dzPluginTiles')
      .on('click.dzPluginTiles', 'tr', function () {
        var table = $('#hardwaretable').dataTable();
        var data = table.fnGetData(this);
        if (!data) {
          return;
        }

        if (data.Type === 'PLUGIN') {
          var rowTypeName = getPluginDisplayName(data.Extra, data.Extra);
          selectTile(data.DT_RowId);
          setPluginEditActions();
          setSettingsHeader(
            'Settings: ' + data.Name,
            rowTypeName !== data.Name ? rowTypeName : '',
            'edit'
          );
          tagSettingsFieldRows();
        } else {
          selectTile(null);
          restoreDefaultActions();
          $('#' + settingsHeaderId).hide();
        }
      });

    return true;
  }

  function renderPluginTiles() {
    if (!createManager()) {
      return;
    }

    populatePluginAddSelect();

    $.ajax({
      url: 'json.htm?type=command&param=gethardware',
      dataType: 'json',
      cache: false,
      success: function (data) {
        var plugins = [];
        if (data && data.result) {
          plugins = data.result.filter(function (item) {
            return String(item.Type) === '94';
          });
        }

        plugins.sort(function (a, b) {
          var aType = getPluginDisplayName(a.Extra, a.Name).toLowerCase();
          var bType = getPluginDisplayName(b.Extra, b.Name).toLowerCase();
          if (aType < bType) return -1;
          if (aType > bType) return 1;
          return String(a.Name).localeCompare(String(b.Name));
        });

        var $grid = $('#' + managerId + ' .dz-plugin-grid').empty();

        if (!plugins.length) {
          $('<div>', {
            'class': 'dz-plugin-empty',
            text: 'No Python plugins are installed yet.'
          }).appendTo($grid);
          selectTile(null);
          return;
        }

        plugins.forEach(function (item) {
          var enabled = isPluginEnabled(item);
          var typeName = getPluginDisplayName(item.Extra, item.Name);
          var version = item.Version || item.PluginVersion || getPluginVersion(item.Extra);

          var $tile = $('<div>', {
            'class': 'dz-plugin-tile',
            'data-plugin-idx': item.idx,
            role: 'listitem'
          });

          var $open = $('<button>', {
            type: 'button',
            'class': 'dz-plugin-tile-open',
            'aria-label': 'Instellingen openen voor ' + (item.Name || typeName),
            'aria-pressed': String(item.idx) === activePluginIdx ? 'true' : 'false'
          }).appendTo($tile);

          var $icon = $('<button>', {
            type: 'button',
            'class': 'dz-plugin-tile-icon ' + (enabled ? 'is-enabled' : 'is-disabled'),
            'aria-pressed': enabled ? 'true' : 'false',
            'aria-label': enabled ? 'Actief uitschakelen' : 'Actief inschakelen',
            title: enabled ? 'Actief uitschakelen' : 'Actief inschakelen'
          });
          $('<i>', { 'class': 'fa-solid fa-power-off' }).appendTo($icon);
          $icon.appendTo($tile);

          var $text = $('<span>', { 'class': 'dz-plugin-tile-text' }).appendTo($tile);
          $('<span>', { 'class': 'dz-plugin-tile-type', text: typeName }).appendTo($text);
          $('<span>', { 'class': 'dz-plugin-tile-name', text: item.Name || typeName }).appendTo($text);

          var address = (item.Address === null || typeof item.Address === 'undefined') ? '' : String(item.Address).trim();
          var port = (item.Port === null || typeof item.Port === 'undefined') ? '' : String(item.Port).trim();
          var $network = $('<span>', { 'class': 'dz-plugin-tile-network' }).appendTo($tile);
          $('<span>').append($('<strong>', { text: 'IP: ' })).append(document.createTextNode(address)).appendTo($network);
          $('<span>').append($('<strong>', { text: 'Port: ' })).append(document.createTextNode(port)).appendTo($network);

          if (version) {
            $('<span>', {
              'class': 'dz-plugin-tile-version-row',
              text: 'v' + version
            }).appendTo($tile);
          }

          $('<span>', {
            'class': 'dz-plugin-tile-idx',
            text: 'IDX ' + item.idx
          }).appendTo($tile);

          if (String(item.idx) === activePluginIdx) {
            $tile.addClass('is-selected');
          }

          $icon.on('click.dzPluginTiles', function () {
            if (String(item.idx) !== activePluginIdx && !showPluginSettings(item, typeName, false)) {
              return;
            }
            togglePluginEnabled(item, $tile);
          });

          $open.on('click.dzPluginTiles', function () {
            showPluginSettings(item, typeName, true);
          });

          $tile.appendTo($grid);
        });

        selectTile(activePluginIdx);
      }
    });
  }

  function scheduleRender(delay) {
    window.clearTimeout(renderTimer);
    renderTimer = window.setTimeout(renderPluginTiles, typeof delay === 'number' ? delay : 40);
  }

  function hookRefreshHardwareTable() {
    if (typeof window.RefreshHardwareTable !== 'function') {
      return;
    }
    if (window.RefreshHardwareTable.__dzPluginTilesWrapped) {
      return;
    }

    var original = window.RefreshHardwareTable;
    var wrapped = function () {
      var closeAfter = isModalOpen() && !suppressModalClose;
      var result = original.apply(this, arguments);
      // Domoticz only refreshes the table after a successful Add, Update or
      // Delete; validation errors leave the modal open so they can be fixed.
      if (closeAfter) {
        closeSettingsModal();
      }
      scheduleRender(20);
      return result;
    };
    wrapped.__dzPluginTilesWrapped = true;
    wrapped.__dzPluginTilesOriginal = original;
    window.RefreshHardwareTable = wrapped;
  }

  function setupHardwarePluginTiles() {
    applyThemePalette();
    window.clearTimeout(setupTimer);
    setupTimer = window.setTimeout(function () {
      hookRefreshHardwareTable();
      if (createManager()) {
        scheduleRender(0);
      }
    }, 30);
  }

  $(function () {
    $(window).on('hashchange.dzPluginTiles', function () {
      closeSettingsModal();
      setupHardwarePluginTiles();
    });

    $(document).on('keydown.dzPluginTiles', function (event) {
      if ((event.key === 'Escape' || event.key === 'Esc') && isModalOpen() && !isOtherDialogOpen()) {
        event.preventDefault();
        closeSettingsModal();
      }
    });

    var hardwareContent = document.getElementById('hardwarecontent');
    if (hardwareContent && typeof MutationObserver !== 'undefined') {
      var observer = new MutationObserver(function () {
        if (!document.getElementById(managerId) && getHardwareRoot().find('#hardwaretable').length) {
          setupHardwarePluginTiles();
        }
      });
      observer.observe(hardwareContent, { childList: true, subtree: true });
    }

    window.setInterval(function () {
      if (getHardwareRoot().find('#hardwaretable').length) {
        hookRefreshHardwareTable();
        if (!$('#' + managerId).length) {
          setupHardwarePluginTiles();
        }
      }
    }, 1000);

    setupHardwarePluginTiles();
  });
})(jQuery, window, document);
