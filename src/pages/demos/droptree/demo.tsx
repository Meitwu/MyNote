import Droptree from './index'
export function gettree(parameters = {}) {
  return {
    url: '/cuc/v1/organization/tree',
    method: 'POST',
    data: parameters
  }
}
export default function () {
  return <Droptree requestmethod={gettree} />
}
