import './index.less'
import left from '@/assets/login_left-1b40bd1b.png'
import Loginform from './loginform'

export default function login() {
  return (
    <div>
      <div className="loginContainer">
        <div className="login-box">
          <div className="login-box-left">
            <img src={left} />
          </div>
          <div className="login-box-right">
            <Loginform />
          </div>
        </div>
      </div>
    </div>
  )
}
