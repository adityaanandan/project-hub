plugins {
    id("java")
    id("org.springframework.boot") version "3.3.0"
    id("io.spring.dependency-management") version "1.1.6"
}

group = "com.example"
version = "1.0.0"
java.sourceCompatibility = JavaVersion.VERSION_17

repositories {
    mavenCentral()
}

dependencies {
    // Web + REST controllers (you already had this)
    implementation("org.springframework.boot:spring-boot-starter-web")

    // JWT validation
    implementation("org.springframework.boot:spring-boot-starter-oauth2-resource-server")

    // JPA / Hibernate
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")

    // Flyway migrations
    implementation("org.flywaydb:flyway-core")
    implementation("org.flywaydb:flyway-database-postgresql")

    // Postgres JDBC driver
    runtimeOnly("org.postgresql:postgresql")

    // Dev conveniences (optional)
    developmentOnly("org.springframework.boot:spring-boot-devtools")

    // Tests
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.springframework.security:spring-security-test")
}

tasks.withType<Test> {
    useJUnitPlatform()
}