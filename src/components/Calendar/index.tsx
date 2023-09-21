import styled from '@emotion/styled'
import { Modal, Divider } from 'antd'
import dayjs from 'dayjs'

const CalendarBox = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(7,1fr)'
})
const CalendarRowBox = styled('div')({
  display: 'grid',
  gridTemplateRows: 'repeat(7,1fr)'
})
// 获取日历上所需的42天
function getMonthDates(year, month) {
  const dates = []
  const date = new Date(year, month, 1)

  // 获取该月的第一天是星期几
  const firstDayOfWeek = date.getDay()

  // 获取上个月的最后一天
  const lastDayOfPrevMonth = new Date(year, month, 0).getDate()

  // 获取该月的总天数
  const totalDays = new Date(year, month + 1, 0).getDate()

  // 计算需要显示的上个月的日期数量
  const prevMonthDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1

  // 添加上个月的日期
  for (
    let i = lastDayOfPrevMonth - prevMonthDays + 1;
    i <= lastDayOfPrevMonth;
    i++
  ) {
    dates.push(i)
  }

  // 添加该月的日期
  for (let j = 1; j <= totalDays; j++) {
    dates.push(j)
  }

  // 计算需要显示的下个月的日期数量
  const nextMonthDays = 42 - dates.length

  // 添加下个月的日期
  for (let k = 1; k <= nextMonthDays; k++) {
    dates.push(k)
  }

  return dates
}
const monthDates = getMonthDates(dayjs().format('YYYY'), dayjs().format('MM'))
const weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

function Index() {
  return (
    <Modal open={true} footer={null} width={640}>
      <h2>{dayjs().format('YYYY年MM月')}</h2>
      {/* 顶部星期 */}
      <CalendarBox>
        {weeks.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </CalendarBox>
      <Divider />
      <CalendarBox style={{ height: '640px' }}>
        {Array.from({ length: 7 }, (v, k) => k).map((item) => {
          return (
            <CalendarRowBox>
              {monthDates
                .filter((itema, i) => i % 7 == item)
                .map((day) => (
                  <div>{day}</div>
                ))}
            </CalendarRowBox>
          )
        })}
      </CalendarBox>
    </Modal>
  )
}
export default Index
