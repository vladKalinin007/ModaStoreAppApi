export class InfrastructureException extends Error {
  code: number;
  location: string;

  constructor(message: string, code: number, location: string) {
    super(message); // Передаем сообщение об ошибке в базовый класс Error
    this.name = 'InfrastructureException'; // Устанавливаем имя ошибки
    this.code = code; // Устанавливаем код ошибки
    this.location = location; // Устанавливаем место ошибки
  }
}
