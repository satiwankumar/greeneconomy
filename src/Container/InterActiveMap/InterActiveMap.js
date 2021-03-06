import * as React from "react";
import { MapAjax } from "@syncfusion/ej2-maps";
import { CheckBoxComponent } from "@syncfusion/ej2-react-buttons";
import { PropertyPane } from "./property-pane";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import {
  MapsComponent,
  Inject,
  LayersDirective,
  LayerDirective,
  Legend,
  MapsTooltip,
} from "@syncfusion/ej2-react-maps";
import * as data from "./color-mapping.json";
import * as mapData from "./usa.json";

import { SampleBase } from "./sample-base";

let datasource = data;
export class ColorMap extends SampleBase {
  constructor() {
    super(...arguments);
    // Code for Property Panel
    this.dropList = [
      { text: "Range", value: "RangeColorMapping" },
      { text: "Equal", value: "EqualColorMapping" },
      { text: "Desaturation", value: "DesaturationColorMapping" },
    ];
  }
  minOpacityChange() {
    if (this.opacityElement.checked && !this.opacityElement.disabled) {
      let slider = document.getElementById("minOpacity");
      let minOpacity = parseFloat(slider.value);
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].minOpacity =
        minOpacity;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].minOpacity =
        minOpacity;
      this.mapInstance.refresh();
    }
  }
  maxOpacityChange() {
    if (this.opacityElement.checked && !this.opacityElement.disabled) {
      let slider = document.getElementById("maxOpacity");
      let maxOpacity = parseFloat(slider.value);
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].maxOpacity =
        maxOpacity;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].maxOpacity =
        maxOpacity;
      this.mapInstance.refresh();
    }
  }
  opacityChange(args) {
    let value = args.checked;
    if (value) {
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].minOpacity =
        parseFloat(this.minOpacityElement.value);
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].maxOpacity =
        parseFloat(this.maxOpacityElement.value);
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].minOpacity =
        parseFloat(this.minOpacityElement.value);
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].maxOpacity =
        parseFloat(this.maxOpacityElement.value);
      this.minOpacityElement.disabled = false;
      this.maxOpacityElement.disabled = false;
    } else {
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].minOpacity =
        null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].maxOpacity =
        null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].minOpacity =
        null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].maxOpacity =
        null;
      this.minOpacityElement.disabled = true;
      this.maxOpacityElement.disabled = true;
    }
    this.mapInstance.refresh();
  }
  typeChange() {
    let value = this.typeElement.value.toString();
    if (value === "RangeColorMapping") {
      this.opacityElement.disabled = true;
      this.mapInstance.layers[0].shapeSettings.colorValuePath = "inches";
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].from = 0.1;
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].to = 1;
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].color =
        "#DEEBAE";
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].label = "0 - 1";
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].from = 1;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].to = 2;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].color =
        "#A4D6AD";
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].label = "1 - 2";
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].from = 2;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].to = 3;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].color =
        "#37AFAB";
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].label = "2 - 3";
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].from = 3;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].to = 4;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].color =
        "#547C84";
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].label = "3 - 4";
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].from = 4;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].to = 5;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].color =
        "#CEBF93";
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].label = "4 - 5";
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].from = 5;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].to = 6;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].color =
        "#a69d70";
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].label = "5 - 6";
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].value = null;
      this.mapInstance.legendSettings.title.text = "Inches";
      this.mapInstance.refresh();
    } else if (value === "EqualColorMapping") {
      this.opacityElement.disabled = true;
      this.mapInstance.layers[0].shapeSettings.colorValuePath = "value";
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].color =
        "#DEEBAE";
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].value = "Low";
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].value =
        "Moderate";
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].color =
        "#A4D6AD";
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].color =
        "#37AFAB";
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].value = "High";
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].color = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].color = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].color = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].value = null;
      this.mapInstance.legendSettings.title.text = "Category";
      this.mapInstance.refresh();
    }
    if (value === "DesaturationColorMapping") {
      if (this.opacityElement.checked) {
        this.mapInstance.layers[0].shapeSettings.colorMapping[0].minOpacity =
          parseFloat(this.minOpacityElement.value);
        this.mapInstance.layers[0].shapeSettings.colorMapping[0].maxOpacity =
          parseFloat(this.maxOpacityElement.value);
      } else {
        this.mapInstance.layers[0].shapeSettings.colorMapping[0].minOpacity =
          null;
        this.mapInstance.layers[0].shapeSettings.colorMapping[0].maxOpacity =
          null;
      }
      this.mapInstance.layers[0].shapeSettings.colorValuePath = "inches";
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].from = 0.1;
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].to = 6;
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].color = [
        "#F0D6AD",
        "#19547B",
      ];
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[0].label = "0 - 6";
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].color = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[1].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].color = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[2].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].color = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[3].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].color = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[4].value = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].from = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].to = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].color = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].label = null;
      this.mapInstance.layers[0].shapeSettings.colorMapping[5].value = null;
      this.mapInstance.legendSettings.title.text = "Inches";
      this.mapInstance.refresh();
      this.opacityElement.disabled = false;
    }
  }
  render() {
    return (
      <div className="control-pane">
        {/* <style>{SAMPLE_CSS}</style> */}
        <div className="col-lg-8 control-section">
          <MapsComponent
            id="maps"
            load={this.load}
            ref={(m) => (this.mapInstance = m)}
            titleSettings={{
              text: "Averages Spring Precipitation of US States",
              textStyle: {
                size: "16px",
              },
            }}
            zoomSettings={{
              enable: true,
              doubleClickZoom: true,
            }}
            onClick={() => {
              console.log(this.mapInstance.getGeoLocation(122, 678, 455));
            }}
            legendSettings={{
              visible: true,
              position: "Bottom",
              height: "10",
              width: "80%",
              mode: "Interactive",
              titleStyle: {
                size: "18px",
                color: "#757575",
              },
              textStyle: {
                color: "#757575",
              },
              title: { text: "Inches" },
            }}
          >
            <Inject services={[Legend, MapsTooltip]} />
            <LayersDirective onClick={() => console.log("jjjjjjj")}>
              <LayerDirective
                dataSource={datasource.color}
                shapeDataPath="State"
                shapeData={mapData}
                shapePropertyPath="name"
                shapeSettings={{
                  colorValuePath: "inches",
                  fill: "#E5E5E5",
                  /*border: {
                color: 'black',
                width: 0.2
            },*/
                  colorMapping: [
                    {
                      from: 0.1,
                      to: 1,
                      color: "#DEEBAE",
                      label: "0 - 1",
                    },
                    {
                      from: 1,
                      to: 2,
                      color: "#A4D6AD",
                      label: "1 - 2",
                    },
                    {
                      from: 2,
                      to: 3,
                      color: "#37AFAB",
                      label: "2 - 3",
                    },
                    {
                      from: 3,
                      to: 4,
                      color: "#547C84",
                      label: "3 - 4",
                    },
                    {
                      from: 4,
                      to: 5,
                      color: "#CEBF93",
                      label: "4 - 5",
                    },
                    {
                      from: 5,
                      to: 6,
                      color: "#a69d70",
                      label: "5 - 6",
                    },
                  ],
                }}
                tooltipSettings={{
                  visible: true,
                  valuePath: "State",
                  template:
                    '<div style="background:#666;color:#fff;width:120px;" id="template"><div class="toolback"><div class="listing2"><center>${State}</center></div>' +
                    '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD"/><div><center>  <span class="listing1">Inches : </span>' +
                    '<span class="listing2">${inches}</span></center></div><div><center>  <span class="listing1">Category : </span>' +
                    '<span class="listing2">${value}</span> </center></div></div></div>',
                }}
              ></LayerDirective>
            </LayersDirective>
          </MapsComponent>
        </div>

        <div className="col-lg-4 property-section">
          <PropertyPane title="Properties">
            <table
              id="property"
              title="Properties"
              className="property-panel-table"
              style={{ width: "100%", marginBottom: "20px" }}
            >
              <tr>
                <td>
                  <div style={{ paddingLeft: "0px" }}>Color Mapping Type</div>
                </td>
                <td>
                  <div>
                    <DropDownListComponent
                      id="Type"
                      width="100%"
                      index={0}
                      change={this.typeChange.bind(this)}
                      ref={(d) => (this.typeElement = d)}
                      dataSource={this.dropList}
                      fields={{ text: "text", value: "value" }}
                    />
                  </div>
                </td>
              </tr>
              <tr id="hideOne">
                <td>
                  <div style={{ paddingLeft: "0px" }}>Change Opacity</div>
                </td>
                <td>
                  <div
                    className="opacityCheckbox"
                    style={{ paddingLeft: "0px", marginTop: "-10px" }}
                  >
                    <CheckBoxComponent
                      id="opacity"
                      checked={false}
                      change={this.opacityChange.bind(this)}
                      ref={(d) => (this.opacityElement = d)}
                      disabled={true}
                      style={{ paddingLeft: "0px" }}
                    />
                  </div>
                </td>
              </tr>
              <tr id="hideTwo" style={{ height: "50px" }}>
                <td>
                  <div style={{ paddingLeft: "0px" }}>Min Opacity</div>
                </td>
                <td>
                  <div>
                    <input
                      type="range"
                      id="minOpacity"
                      disabled
                      onChange={this.minOpacityChange.bind(this)}
                      ref={(d) => (this.minOpacityElement = d)}
                      min="0"
                      max="1"
                      step="0.1"
                      defaultValue="0.5"
                      style={{ width: "100%" }}
                    />
                  </div>
                </td>
              </tr>
              <tr id="hideThree" style={{ height: "50px" }}>
                <td>
                  <div style={{ paddingLeft: "0px" }}>Max Opacity</div>
                </td>
                <td>
                  <div>
                    <input
                      type="range"
                      id="maxOpacity"
                      disabled
                      onChange={this.maxOpacityChange.bind(this)}
                      ref={(d) => (this.maxOpacityElement = d)}
                      min="0"
                      max="1"
                      step="0.1"
                      defaultValue="1"
                      style={{ width: "100%" }}
                    />
                  </div>
                </td>
              </tr>
            </table>
          </PropertyPane>
        </div>
      </div>
    );
  }
}
