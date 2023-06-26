import { getYaml } from "alemon";
import { join } from "path";
import { existsSync, cpSync } from "fs";
export const DefaultConfigLogin = "default/login.yaml";
export const DefaultConfigRedis = "default/redis.yaml";
export const DefaultConfigMysql = "default/mysql.yaml";
export const DefaultConfigPuppeteer = "default/puppeteer.yaml";
export const ConfigLogin = "config/login.yaml";
export const ConfigRedis = "config/redis.yaml";
export const ConfigMysql = "config/mysql.yaml";
export const ConfigPuppeteer = "config/puppeteer.yaml";
/** redis  */
if (existsSync(DefaultConfigRedis) && !existsSync(ConfigRedis)) {
  cpSync(DefaultConfigRedis, ConfigRedis, {
    recursive: true,
  });
}
/** mysql  */
if (existsSync(DefaultConfigMysql) && !existsSync(ConfigMysql)) {
  cpSync(DefaultConfigMysql, ConfigMysql, {
    recursive: true,
  });
}
/** puppeterr */
if (existsSync(DefaultConfigPuppeteer) && !existsSync(ConfigPuppeteer)) {
  cpSync(DefaultConfigPuppeteer, ConfigPuppeteer, {
    recursive: true,
  });
}
/* 读取配置 */
const PuppeteerConfig: any = getYaml(join(process.cwd(), ConfigPuppeteer));
export { PuppeteerConfig };
