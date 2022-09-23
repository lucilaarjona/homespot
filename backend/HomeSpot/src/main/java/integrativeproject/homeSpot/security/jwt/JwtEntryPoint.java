package integrativeproject.homeSpot.security.jwt;


import org.apache.log4j.*;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// Comprueba si existe un token si no devuelve un 401 no autorizado

@Component
public class JwtEntryPoint implements AuthenticationEntryPoint {

    // Log4j por si hay errores
    private final static Logger logger = Logger.getLogger(JwtEntryPoint.class);
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        logger.error("Commence failed");
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "You are not authorized");

    }
}
