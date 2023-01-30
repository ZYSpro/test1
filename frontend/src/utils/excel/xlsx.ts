import * as XLSX from 'xlsx'

type TableData = {
  [key: string]: unknown
}

type TableHeader = {
  name: string
  key: string
}

/**
 *  导出xlsx文件
 */
export const GenerateXLSX = (list: Array<TableData>, headers: Array<TableHeader>, fileName = 'default.xlsx'): void => {
  const header_key = headers.map(item => item.key)

  const wb = { SheetNames: ['Sheet1'], Sheets: { Sheet1: {} }, Props: {} }

  // 生成表头
  const _header: TableData = {}
  headers.forEach(item => (_header[item.key] = item.name))
  list.unshift(_header)

  wb.Sheets['Sheet1'] = XLSX.utils.json_to_sheet(list, { header: header_key, skipHeader: true })

  const out = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' })
  const blob = new Blob([s2ab(out)], { type: 'application/octet-stream' })
  //导出
  const url = window.URL.createObjectURL(blob)
  const downloadLink = document.createElement('a')
  downloadLink.href = url
  //导出文件的文件名
  downloadLink.download = fileName
  downloadLink.click()
  window.URL.revokeObjectURL(url)
}

/**
 * 字符串转字符流
 * @param s
 * @returns
 */
function s2ab(s: string) {
  const buf = new ArrayBuffer(s.length)
  const view = new Uint8Array(buf)
  for (let i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
  return buf
}
