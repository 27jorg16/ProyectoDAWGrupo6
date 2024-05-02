package pe.edu.cibertec.TiendaGranRitmo.controller.backoffice;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String home() {
        return "Backoffice/auth/home";
    }
}
