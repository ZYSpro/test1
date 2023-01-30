type TableData = {
  [key: string]: unknown
}

type TableHeader = {
  name: string
  key: keyof TableData
}

/**
 *  导出csv文件
 */
export const GenerateCSV = (list: Array<TableData>, headers: Array<TableHeader>, fileName = 'default.csv'): void => {
  //处理数据
  const header_name = headers.map(item => item.name)
  const header_key = headers.map(item => item.key)

  const str: string[] = []
  str.push(header_name.join(',') + '\r\n')

  for (let i = 0; i < list.length; i++) {
    const temp = []
    for (let j = 0; j < header_key.length; j++) {
      temp.push(list[i][header_key[j]])
    }
    str.push(temp.join(',') + '\r\n')
  }

  const blob = new Blob(['\uFEFF' + str.join('')], { type: 'test/csv;charset=utf-8' })

  //导出
  const url = window.URL.createObjectURL(blob)
  const downloadLink = document.createElement('a')
  downloadLink.href = url
  //导出文件的文件名
  downloadLink.download = fileName
  downloadLink.click()
  window.URL.revokeObjectURL(url)
}
