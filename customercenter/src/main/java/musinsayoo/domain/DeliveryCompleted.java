package musinsayoo.domain;

import java.time.LocalDate;
import java.util.*;
import lombok.Data;
import musinsayoo.infra.AbstractEvent;

@Data
public class DeliveryCompleted extends AbstractEvent {

    private Long id;
    private String userId;
    private Long orderId;
    private String productName;
    private Long productId;
    private Integer qty;
    private String status;
    private Date deliveryDt;
}
