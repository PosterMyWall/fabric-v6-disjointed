// @ts-nocheck
import { Group } from './Group';
import { IText } from './IText';

export class Table extends Group {
  declare customPMWType: string;
  /**
   * Number of table rows
   * @type {Number}
   */
  declare rows: number;
  /**
   * Number of table columns
   * @type {Number}
   */
  declare columns: number;
  declare layoutType: string;
  /**
   * Background color 1 for alternate table background
   * @type {String}
   */
  declare alternateBackgroundColor1: string;
  /**
   * Background color 2 for alternate table background
   * @type {String}
   */
  declare alternateBackgroundColor2: string;
  /**
   * Background color for highlighted rows
   * @type {String}
   */
  declare highlightedRowsBackgroundColor: string;
  /**
   * Array containing indices of highlighted rows
   * @type {Array}
   */
  declare highlightedRows: Array<number>;
  /**
   * 2D array containing table data
   * @type {Array}
   */
  declare tableArray: Array<Array<IText>>;
  /**
   * Spacing Between rows of table
   * @type {Number}
   */
  declare ySpacing: number;
  /**
   * Spacing Between column of table
   * @type {Number}
   */
  declare xSpacing: number;
  /**
   * Property used for showing the 'edit content' button
   * @type {boolean}
   */
  declare hasButton: boolean;


  renderTableBorders(ctx: CanvasRenderingContext2D): void {
    // fill later.
  }

  /**
   * This function is responsible for rendering the background of table.
   * It loops over all the rows in the table and draws the appropriate color rectangle for each row.
   * If more then one consecutive rows have background of same color then it draws a one big rectangle of that color.
   * @param {CanvasRenderingContext2D} ctx context to render on
   */
  renderTableCustomBackground(ctx: CanvasRenderingContext2D) {
    // fill later
  }

  /**
   * Returns an array containing string values corresponding to rows background color.
   * 'highlight' for selected rows
   * 'color' for when colored background is selected by user
   * 'alternate1' for even rows when alternate background is selected
   * 'alternate2' for odd rows when alternate background is selected
   * 'none' for transparent background
   * @returns {Array}
   */
  getTableBackGroundData(): Array<string> {
    // fill later
    return [''];
  }

  /**
   * Returns the height of an item in a given row with max height,
   * this value is basically the minimum space in y-axis needed by this row in a table.
   * @param {Number} row
   * @returns {Number}
   */
  getHeightOfRow(row: number) {
    // fill later
    return 0;
  }

  /**
   * Returns the width of an item in a given column with max width,
   * this value is basically the minimum space in x-axis needed by this column in a table.
   * @param {Number} column column index
   * @returns {Number} minimum width required by this column
   */
  getWidthOfColumn(column: number) {
    // fill later
    return 0;
  }

  /**
   * renders border for table columns
   * @param {CanvasRenderingContext2D} ctx context to render on
   */
  drawColumnBorders(ctx: CanvasRenderingContext2D): void {
    // fill later
  }

  /**
   * renders border for table rows
   * @param {CanvasRenderingContext2D} ctx context to render on
   */
  drawRowBorders(ctx: CanvasRenderingContext2D): void {
    // fill later
  }

  /**
   * Returns true if design is simple table structure('custom-table' or 'layout-1'), false otherwise
   * @returns {boolean}
   */
  isTableLayout(): boolean {
    return this.layoutType === 'layout-1' || this.layoutType === 'custom-table';
  }
}
