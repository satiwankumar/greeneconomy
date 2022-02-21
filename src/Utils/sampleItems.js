import AreaChart from "../Container/TrackingDashboard/Charts/AreaChart/AreaChart";
import BarChart from "../Container/TrackingDashboard/Charts/BarChart/BarChart";
import BrushBarchart from "../Container/TrackingDashboard/Charts/BrushBarchart/BrushBarchart";
import CustomShapBarchart from "../Container/TrackingDashboard/Charts/CustomShapBarchart/CustomShapBarchart";
import GanttChart from "../Container/TrackingDashboard/Charts/GanttChart/GanttChart";
import GanttChart1 from "../Container/TrackingDashboard/Charts/GanttCharts1/GanttChart1";
import HorizontalStackChart from "../Container/TrackingDashboard/Charts/HorizontalStackChart/HorizontalStackChart";
import LabeledLineChart from "../Container/TrackingDashboard/Charts/LabeledLineChart/LabeledLineChart";
import LineBarAreaComposedChart from "../Container/TrackingDashboard/Charts/LineBarAreaComposedChart/LineBarAreaComposedChart";
import LineChart from "../Container/TrackingDashboard/Charts/LineChart/LineChart";
import MultiSeriesLineChart from "../Container/TrackingDashboard/Charts/MultiSeriesLineChart/MultiSeriesLineChart";
import PieAnglePaddingChart from "../Container/TrackingDashboard/Charts/PieAnglePaddingChart/PieAnglePaddingChart";
import PieChart from "../Container/TrackingDashboard/Charts/PieChart/PieChart";
import ScatterChart from "../Container/TrackingDashboard/Charts/ScatterChart/ScatterChart";
import StackedBarChart from "../Container/TrackingDashboard/Charts/StackedBarChart/StackedBarChart";
import StackedChart from "../Container/TrackingDashboard/Charts/StackedChart/StackedChart";
import VerticleLineChart from "../Container/TrackingDashboard/Charts/VerticleLineChart/VerticleLineChart";

export default [
  { id: 1, key: "pieChart", chart: <PieChart /> },
  { id: 2, chart: <BarChart /> },
  { id: 4, key: "lineChart", chart: <LineChart /> },
  { id: 13, key: "ganttChart", chart: <GanttChart1 /> },
  { id: 5, key: "barChart", chart: <StackedBarChart /> },
  { id: 6, key: "lineChart1", chart: <LineBarAreaComposedChart /> },
  { id: 11, key: "ganttChart1", chart: <GanttChart /> },
  { id: 9, key: "pieChart1", chart: <PieAnglePaddingChart /> },
  { id: 7, key: "barChart1", chart: <HorizontalStackChart /> },
  { id: 14, chart: <VerticleLineChart /> },
  { id: 12, chart: <CustomShapBarchart /> },
  { id: 8, key: "scatterChart", chart: <ScatterChart /> },
  { id: 15, key: "lineChart2", chart: <LabeledLineChart /> },
  { id: 10, chart: <BrushBarchart /> },
  { id: 3, key: "areaChart", chart: <AreaChart /> },
  { id: 16, key: "lineChart3", chart: <MultiSeriesLineChart /> },
  { id: 17, key: "stackChart", chart: <StackedChart /> },
];
