/* eslint-disable no-unused-vars */
export interface selectDataType {
  label: string;
  value: string | number;
}

export interface formLabelListType {
  type: string;
  prop: string;
  title?: string;
  inputType?: string;
  maxlength?: string;
  disabled?: boolean;
  placeholder?: string;
  autosize?: string;
  data?: any;
}

export interface detailLabelListType {
  title: string;
  key: string;
  slot?: string;
  filterFn?: Function;
  timeFormat?: boolean;
}

export interface searchLabelListType {
  title: string;
  type: string;
  prop: string;
  dateFormat?: string;
  slot?: string;
  dateType?: string;
  placeholder?: string;
  defaultTime?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  data?: selectDataType[];
}

export interface searchFormType {
  pageIndex?: number;
  pageSize?: number;
}

export interface tableLabelListType {
  type?: string;
  title?: string;
  key?: string;
  slot?: string;
  width?: number | string;
  data?: any[];
  statusColor?: (row: any) => string;
  customRender?: (row: any) => string;
}
