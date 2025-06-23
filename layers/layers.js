var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_145_1 = new ol.format.GeoJSON();
var features_145_1 = format_145_1.readFeatures(json_145_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_145_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_145_1.addFeatures(features_145_1);
var lyr_145_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_145_1, 
                style: style_145_1,
                popuplayertitle: '145',
                interactive: true,
                title: '<img src="styles/legend/145_1.png" /> 145'
            });
var format_144_2 = new ol.format.GeoJSON();
var features_144_2 = format_144_2.readFeatures(json_144_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_144_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_144_2.addFeatures(features_144_2);
var lyr_144_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_144_2, 
                style: style_144_2,
                popuplayertitle: '144',
                interactive: true,
                title: '<img src="styles/legend/144_2.png" /> 144'
            });
var format_143_3 = new ol.format.GeoJSON();
var features_143_3 = format_143_3.readFeatures(json_143_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_143_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_143_3.addFeatures(features_143_3);
var lyr_143_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_143_3, 
                style: style_143_3,
                popuplayertitle: '143',
                interactive: true,
                title: '<img src="styles/legend/143_3.png" /> 143'
            });
var format_142_4 = new ol.format.GeoJSON();
var features_142_4 = format_142_4.readFeatures(json_142_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_142_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_142_4.addFeatures(features_142_4);
var lyr_142_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_142_4, 
                style: style_142_4,
                popuplayertitle: '142',
                interactive: true,
                title: '<img src="styles/legend/142_4.png" /> 142'
            });
var format_141_5 = new ol.format.GeoJSON();
var features_141_5 = format_141_5.readFeatures(json_141_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_141_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_141_5.addFeatures(features_141_5);
var lyr_141_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_141_5, 
                style: style_141_5,
                popuplayertitle: '141',
                interactive: true,
                title: '<img src="styles/legend/141_5.png" /> 141'
            });
var format_163_6 = new ol.format.GeoJSON();
var features_163_6 = format_163_6.readFeatures(json_163_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_163_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_163_6.addFeatures(features_163_6);
var lyr_163_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_163_6, 
                style: style_163_6,
                popuplayertitle: '163',
                interactive: true,
                title: '<img src="styles/legend/163_6.png" /> 163'
            });
var format_162_7 = new ol.format.GeoJSON();
var features_162_7 = format_162_7.readFeatures(json_162_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_162_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_162_7.addFeatures(features_162_7);
var lyr_162_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_162_7, 
                style: style_162_7,
                popuplayertitle: '162',
                interactive: true,
                title: '<img src="styles/legend/162_7.png" /> 162'
            });
var format_161_8 = new ol.format.GeoJSON();
var features_161_8 = format_161_8.readFeatures(json_161_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_161_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_161_8.addFeatures(features_161_8);
var lyr_161_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_161_8, 
                style: style_161_8,
                popuplayertitle: '161',
                interactive: true,
                title: '<img src="styles/legend/161_8.png" /> 161'
            });
var format_134_9 = new ol.format.GeoJSON();
var features_134_9 = format_134_9.readFeatures(json_134_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_134_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_134_9.addFeatures(features_134_9);
var lyr_134_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_134_9, 
                style: style_134_9,
                popuplayertitle: '134',
                interactive: true,
                title: '<img src="styles/legend/134_9.png" /> 134'
            });
var format_133_10 = new ol.format.GeoJSON();
var features_133_10 = format_133_10.readFeatures(json_133_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_133_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_133_10.addFeatures(features_133_10);
var lyr_133_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_133_10, 
                style: style_133_10,
                popuplayertitle: '133',
                interactive: true,
                title: '<img src="styles/legend/133_10.png" /> 133'
            });
var format_132_11 = new ol.format.GeoJSON();
var features_132_11 = format_132_11.readFeatures(json_132_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_132_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_132_11.addFeatures(features_132_11);
var lyr_132_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_132_11, 
                style: style_132_11,
                popuplayertitle: '132',
                interactive: true,
                title: '<img src="styles/legend/132_11.png" /> 132'
            });
var format_131_12 = new ol.format.GeoJSON();
var features_131_12 = format_131_12.readFeatures(json_131_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_131_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_131_12.addFeatures(features_131_12);
var lyr_131_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_131_12, 
                style: style_131_12,
                popuplayertitle: '131',
                interactive: true,
                title: '<img src="styles/legend/131_12.png" /> 131'
            });
var group_NORTH = new ol.layer.Group({
                                layers: [lyr_145_1,lyr_144_2,lyr_143_3,lyr_142_4,lyr_141_5,lyr_163_6,lyr_162_7,lyr_161_8,lyr_134_9,lyr_133_10,lyr_132_11,lyr_131_12,],
                                fold: 'open',
                                title: 'NORTH'});

lyr_GoogleHybrid_0.setVisible(true);lyr_145_1.setVisible(true);lyr_144_2.setVisible(true);lyr_143_3.setVisible(true);lyr_142_4.setVisible(true);lyr_141_5.setVisible(true);lyr_163_6.setVisible(true);lyr_162_7.setVisible(true);lyr_161_8.setVisible(true);lyr_134_9.setVisible(true);lyr_133_10.setVisible(true);lyr_132_11.setVisible(true);lyr_131_12.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_NORTH];
lyr_145_1.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_144_2.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_143_3.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_142_4.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_141_5.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_163_6.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_162_7.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_161_8.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_134_9.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_133_10.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', });
lyr_132_11.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', 'Name': 'Name', 'Address': 'Address', 'MeterNo': 'MeterNo', 'BookNo': 'BookNo', 'RateCode': 'RateCode', 'Status': 'Status', 'Cellphone': 'Cellphone', 'SeqNo': 'SeqNo', });
lyr_131_12.set('fieldAliases', {'fid': 'fid', 'Remarks': 'Remarks', 'Comments': 'Comments', 'Type': 'Type', 'AccountNumber': 'AccountNumber', });
lyr_145_1.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_144_2.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_143_3.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_142_4.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_141_5.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_163_6.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_162_7.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_161_8.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_134_9.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_133_10.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', });
lyr_132_11.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'MeterNo': 'TextEdit', 'BookNo': 'TextEdit', 'RateCode': 'TextEdit', 'Status': 'TextEdit', 'Cellphone': 'TextEdit', 'SeqNo': 'Range', });
lyr_131_12.set('fieldImages', {'fid': 'TextEdit', 'Remarks': 'TextEdit', 'Comments': 'TextEdit', 'Type': 'TextEdit', 'AccountNumber': 'TextEdit', });
lyr_145_1.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', 'Name': 'no label', 'Address': 'no label', 'MeterNo': 'no label', 'BookNo': 'no label', 'RateCode': 'no label', 'Status': 'no label', 'Cellphone': 'no label', 'SeqNo': 'no label', });
lyr_144_2.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', 'Name': 'no label', 'Address': 'no label', 'MeterNo': 'no label', 'BookNo': 'no label', 'RateCode': 'no label', 'Status': 'no label', 'Cellphone': 'no label', 'SeqNo': 'no label', });
lyr_143_3.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', 'Name': 'no label', 'Address': 'no label', 'MeterNo': 'no label', 'BookNo': 'no label', 'RateCode': 'no label', 'Status': 'no label', 'Cellphone': 'no label', 'SeqNo': 'no label', });
lyr_142_4.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', 'Name': 'no label', 'Address': 'no label', 'MeterNo': 'no label', 'BookNo': 'no label', 'RateCode': 'no label', 'Status': 'no label', 'Cellphone': 'no label', 'SeqNo': 'no label', });
lyr_141_5.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', 'Name': 'no label', 'Address': 'no label', 'MeterNo': 'no label', 'BookNo': 'no label', 'RateCode': 'no label', 'Status': 'no label', 'Cellphone': 'no label', 'SeqNo': 'no label', });
lyr_163_6.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', 'Name': 'no label', 'Address': 'no label', 'MeterNo': 'no label', 'BookNo': 'no label', 'RateCode': 'no label', 'Status': 'no label', 'Cellphone': 'no label', 'SeqNo': 'no label', });
lyr_162_7.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', 'Name': 'no label', 'Address': 'no label', 'MeterNo': 'no label', 'BookNo': 'no label', 'RateCode': 'no label', 'Status': 'no label', 'Cellphone': 'no label', 'SeqNo': 'no label', });
lyr_161_8.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', 'Name': 'no label', 'Address': 'no label', 'MeterNo': 'no label', 'BookNo': 'no label', 'RateCode': 'no label', 'Status': 'no label', 'Cellphone': 'no label', 'SeqNo': 'no label', });
lyr_134_9.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', 'Name': 'no label', 'Address': 'no label', 'MeterNo': 'no label', 'BookNo': 'no label', 'RateCode': 'no label', 'Status': 'no label', 'Cellphone': 'no label', 'SeqNo': 'no label', });
lyr_133_10.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', });
lyr_132_11.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', });
lyr_131_12.set('fieldLabels', {'fid': 'no label', 'Remarks': 'no label', 'Comments': 'no label', 'Type': 'no label', 'AccountNumber': 'no label', });
lyr_131_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});