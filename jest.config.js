module.exports = {
  testEnvironment: 'node', // 运行测试的环境为 Node.js
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // 支持的文件类型扩展名
  testMatch: ['**/__test__/**/*.test.ts'], // 匹配测试文件的模式
  // setupFilesAfterEnv: ['./jest.setup.js'], // 在运行测试之前需要执行的设置文件
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' }, // 模块名称映射，用于解决模块路径别名
  detectOpenHandles: true, // 检测未关闭的句柄，可以帮助捕获可能的内存泄漏问题
  transformIgnorePatterns: ['/node_modules/(?!(your-dependency-to-keep-esm)/)'], // 忽略转换的模块的匹配模式
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        esModuleInterop: true
      }
    ]
  }
}
