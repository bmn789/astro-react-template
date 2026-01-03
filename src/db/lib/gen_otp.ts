export default function gen_otp(length = 4) {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("")
}

