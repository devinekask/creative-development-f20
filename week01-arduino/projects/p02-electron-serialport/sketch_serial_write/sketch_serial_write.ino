void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("value:");
  Serial.println(millis());
  delay(500);
}
