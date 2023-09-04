const os = require('os');

function print(value) {
    console.log(value);
}

print(os.hostname()); // 운영체제 호스트 이름 출력
print(os.type()); // 운영체제 이름
print(os.platform()); // 운영체제 플랫폼
print(os.arch()); // 운영체제 아키텍처
print(os.release()); // 운영체제의 버전 반환
print(os.uptime()); // 운영체제 실행시간 반환
print(os.loadavg()); // 로드 애버리지 정보를 담은 배열 리턴

print(os.totalmem()); // 시스템 총 메모리
print(os.freemem()); // 시스템 사용 가능 메모리
print(os.cpus()); // CPU정보를 담은 객체 반환
print(os.networkInterfaces()); // 네트워크 인터페이스의 정보를 담은 배열 반환